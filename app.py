from flask import Flask, request, jsonify, send_from_directory
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

app = Flask(__name__, static_folder='.', static_url_path='')

# Email configuration
EMAIL_ADDRESS = "sheikh.maaz1308@gmail.com"
EMAIL_PASSWORD = "uxuharazqjdpvepc"
RECIPIENT_EMAIL = "sheikh.maaz1308@gmail.com"

# Serve index page
@app.route('/')
def serve_index():
    return send_from_directory('.', 'index.html')

# API endpoint for processing orders
@app.route('/process_order', methods=['POST'])
def process_order():
    try:
        order_data = request.json
        
        # Create email message
        msg = MIMEMultipart()
        msg['From'] = EMAIL_ADDRESS
        msg['To'] = RECIPIENT_EMAIL
        msg['Subject'] = f"New Order from {order_data['customer']['name']}"
        
        # Create email body
        body = f"""
        New Order Received:
        
        Customer Details:
        Name: {order_data['customer']['name']}
        Phone: {order_data['customer']['phone']}
        Address: {order_data['customer']['address']}
        
        Order Items:
        """
        
        for item in order_data['items']:
            body += f"\n- {item['title']} x{item['quantity']} @ Rs. {item['price']} each"
        
        body += f"\n\nTotal: Rs. {order_data['total']}"
        
        msg.attach(MIMEText(body, 'plain'))
        
        # Send email
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            smtp.send_message(msg)
        
        return jsonify({"success": True})
    
    except Exception as e:
        print(f"Error processing order: {e}")
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)