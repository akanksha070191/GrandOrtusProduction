from django.shortcuts import render, redirect 
from django.http import HttpResponse 
import ssl
import smtplib
import os
from django.conf import settings
from email.message import EmailMessage
from django.http import JsonResponse




def index(request):
    return render(request, 'main/index.html')

def home(request):
    return render(request, 'main/index.html')

def about(request):
    return render(request, 'main/About.html')

def team(request):
    return render(request, 'main/Team.html')

def blog(request):
    return render(request, 'main/Blog.html')

def caseStudy(request):
    return render(request, 'main/CaseStudy.html')

def casestudyHealthCareView(request):
    return render(request, 'main/casestudyHealthCareView.html')

def awardsCertifications(request):
    return render(request, 'main/AwardsCertifications.html')

def lifeGrandOrtus(request):
    return render(request, 'main/LifeGrandOrtus.html')

def currentJobOpening(request):
    return render(request, 'main/CurrentJobOpenings.html')

def csr(request):
    return render(request, 'main/CSR.html')

def contactus(request):
    return render(request, 'main/Contact.html')

def partners(request):
    return render(request, 'main/Partners.html')

def clients(request):
    return render(request, 'main/Clients.html')

def productDesc1(request):
    return render(request, 'main/product1desc.html')

def productDesc2(request):
    return render(request, 'main/product2desc.html')

def fmcg(request):
    return render(request, 'byIndustries/FMCG.html')

def gaming(request):
    return render(request, 'byIndustries/Gaming.html')

def healthcare(request):
    return render(request, 'byIndustries/Healthcare.html')

def hospitality(request):
    return render(request, 'byIndustries/Hospitality.html')

def ites(request):
    return render(request, 'byIndustries/ITES.html')

def manufacturing(request):
    return render(request, 'byIndustries/Manufacturing.html')

def onDemand(request):
    return render(request, 'byIndustries/OnDemand.html')

def retail(request):
    return render(request, 'byIndustries/Retail.html')

def staffing(request):
    return render(request, 'byIndustries/Staffing.html')

def telecom(request):
    return render(request, 'byIndustries/Telecom.html')

def dataCenter(request):
    return render(request, 'services/Datacenter.html')

def fmsAndamc(request):
    return render(request, 'services/FMSAndAMCSupport.html')

def implementationServices(request):
    return render(request, 'services/ImplementationServices.html')

def infrastructure(request):
    return render(request, 'services/Infrastructure.html')

def internet(request):
    return render(request, 'services/Internet.html')

def security(request):
    return render(request, 'services/Security.html')

def zeroTrustNetwork(request):
    return render(request, 'services/ZeroTrustNetwork.html')

def mobWebDev(request):
    return render(request, 'services/MobWebDev.html')

def mobilityAndCloud(request):
    return render(request, 'services/MobilityAndCloud.html')

def networking(request):
    return render(request, 'services/Networking.html')

def serviceList(request):
    return render(request, 'services/ServiceList.html')

def windowsArticle(request):
    return render(request, 'blogsArticle/Windows.html')

def ecoSystem(request):
    return render(request, 'blogsArticle/Ecosystem.html')

def cyberSecurity(request):
    return render(request, 'blogsArticle/Cybersecurity.html')

def exploring(request):
    return render(request, 'blogsArticle/Exploring.html')

def itService(request):
    return render(request, 'blogsArticle/ITservices.html')

def transformative(request):
    return render(request, 'blogsArticle/Transformative.html')

def sseJobOpeningForm(request):
    return render(request, 'main/SSEJobOpeningForm.html')

def uiuxJobOpeningForm(request):
    return render(request, 'main/UIUXJobOpeningForm.html')

def daJobOpeningForm(request):
    return render(request, 'main/DAJobOpeningForm.html')

def accountJobOpeningForm(request):
    return render(request, 'main/accountJobOpeningForm.html')

def networkJobOpeningForm(request):
    return render(request, 'main/networkJobOpeningForm.html')

def systemEngJobOpeningForm(request):
    return render(request, 'main/systemEngJobOpeningForm.html')



def indexContactForm(request):
    if request.method == 'POST':
        name = request.POST.get('name', '').strip()
        email = request.POST.get('email', '').strip()
        phoneNo = request.POST.get('phone', '').strip()
        services = request.POST.get('services', '').strip()
        message = request.POST.get('message', '').strip()
        user_captcha = request.POST.get('captcha_input', '').strip()
        generated_captcha = request.session.get('generated_captcha', '')

        # CAPTCHA validation
        if user_captcha != generated_captcha:
            return JsonResponse({'error': 'Invalid CAPTCHA. Please try again.'}, status=400)


        email_body = f"""
        Name: {name}
        Email: {email}
        Phone No: {phoneNo}
        Subject: {services}
        Message:
        {message}
        """
        print('emailbody: ', email_body)
       
        sender_email = os.getenv("SENDER_EMAIL", settings.EMAIL_ID)
        sender_password = os.getenv("SENDER_PASSWORD", settings.EMAIL_PASSWORD)
        recipient_email = "test@grandortus.com"  # Replace with your recipient address

        try:
            # Create the email message
            email_msg = EmailMessage()
            email_msg['Subject'] = services
            email_msg['From'] = sender_email
            email_msg['To'] = recipient_email
            email_msg.set_content(email_body)

            # Email sending
            if ssl._create_unverified_context():
                context = ssl._create_unverified_context()
                with smtplib.SMTP("mail.grandortus.com", 587) as server:
                    server.starttls(context=context)
                    server.login(sender_email, sender_password)
                    server.send_message(email_msg)
                    
            else:
                context = context = ssl.create_default_context(cafile="/opt/homebrew/etc/openssl@3/cert.pem")
                with smtplib.SMTP("mail.grandortus.com", 587) as server:
                    server.starttls(context=context)
                    server.login(sender_email, sender_password)
                    server.send_message(email_msg)

            return render(request, 'main/index.html', {'success_message': "Form submitted successfully!"})    
        except Exception as e:
            return HttpResponse(f"Failed to send email. Error: {str(e)}")

    return render(request, 'main/index.html')

def jobForm(request):
    if request.method == 'POST':
        # Extract form data
        name = request.POST.get('fullName', '').strip()
        email = request.POST.get('email', '').strip()
        phoneNo = request.POST.get('phone', '').strip()
        coverLetter = request.POST.get('coverLetter', '').strip()
        resume = request.FILES.get('resume')
        jobPosition = request.POST.get('jobPosition', '').strip()
        print('resume', resume)

        # Email content
        subject = f"New Job Application from {name}"
        email_body = f"""
        Name: {name}
        Email: {email}
        Phone No: {phoneNo}
        Job Position: {jobPosition}
        Cover Letter:
        {coverLetter}
        """

        # Sender and recipient email
        sender_email = os.getenv("SENDER_EMAIL", settings.EMAIL_ID)
        sender_password = os.getenv("SENDER_PASSWORD", settings.EMAIL_PASSWORD)
        recipient_email = "akanksha@grandortus.com"

        try:
            # Create email message with attachment (if provided)

            if ssl._create_unverified_context():
                context = ssl._create_unverified_context()
                with smtplib.SMTP("mail.grandortus.com", 587) as server:
                    server.starttls(context=context)
                    server.login(sender_email, sender_password)
                    
                    # Prepare the email
                    message = f"Subject: {subject}\n\n{email_body}"
                    
                    # Attach the resume if available
                    if resume:
                        from email.mime.multipart import MIMEMultipart
                        from email.mime.text import MIMEText
                        from email.mime.base import MIMEBase
                        from email import encoders

                        # MIME structure
                        msg = MIMEMultipart()
                        msg['From'] = sender_email
                        msg['To'] = recipient_email
                        msg['Subject'] = subject
                        
                        # Attach email body
                        msg.attach(MIMEText(email_body, 'plain'))
                        
                        # Attach resume
                        part = MIMEBase('application', 'octet-stream')
                        part.set_payload(resume.read())
                        encoders.encode_base64(part)
                        part.add_header(
                            "Content-Disposition",
                            f"attachment; filename={resume.name}",
                        )
                        msg.attach(part)
                        
                        # Send email with attachment
                        server.sendmail(
                            sender_email,
                            [recipient_email],
                            msg.as_string()
                        )
                    else:
                        # Send email without attachment
                        server.sendmail(
                            sender_email,
                            [recipient_email],
                            message
                        )

            else:
                context = context = ssl.create_default_context(cafile="/opt/homebrew/etc/openssl@3/cert.pem")
                with smtplib.SMTP("mail.grandortus.com", 587) as server:
                    server.starttls(context=context)
                    server.login(sender_email, sender_password)
                    
                    # Prepare the email
                    message = f"Subject: {subject}\n\n{email_body}"
                    
                    # Attach the resume if available
                    if resume:
                        from email.mime.multipart import MIMEMultipart
                        from email.mime.text import MIMEText
                        from email.mime.base import MIMEBase
                        from email import encoders

                        # MIME structure
                        msg = MIMEMultipart()
                        msg['From'] = sender_email
                        msg['To'] = recipient_email
                        msg['Subject'] = subject
                        
                        # Attach email body
                        msg.attach(MIMEText(email_body, 'plain'))
                        
                        # Attach resume
                        part = MIMEBase('application', 'octet-stream')
                        part.set_payload(resume.read())
                        encoders.encode_base64(part)
                        part.add_header(
                            "Content-Disposition",
                            f"attachment; filename={resume.name}",
                        )
                        msg.attach(part)
                        
                        # Send email with attachment
                        server.sendmail(
                            sender_email,
                            [recipient_email],
                            msg.as_string()
                        )
                    else:
                        # Send email without attachment
                        server.sendmail(
                            sender_email,
                            [recipient_email],
                            message
                        )

            return render(request, 'main/index.html', {'success_message': "Form submitted successfully!"})

        except Exception as e:
            return HttpResponse(f"Failed to send email. Error: {str(e)}")

    return render(request, 'main/index.html')

def startUp(request):
    return render(request, 'companySize/startUp.html')

def enterprices(request):
    return render(request, 'companySize/enterprise.html')

def msme(request):
    return render(request, 'companySize/msme.html')

def getInTouchForm(request):
    if request.method == 'POST':
        name = request.POST.get('name', '').strip()
        email = request.POST.get('email', '').strip()
        phoneNo = request.POST.get('phone', '').strip()
        message = request.POST.get('message', '').strip()
        
        email_body = f"""
        Name: {name}
        Email: {email}
        Phone No: {phoneNo}
        Message: {message}
        Message:
        {message}
        """
        print('emailbody: ', email_body)
       
        sender_email = os.getenv("SENDER_EMAIL", settings.EMAIL_ID)
        sender_password = os.getenv("SENDER_PASSWORD", settings.EMAIL_PASSWORD)
        recipient_email = "akanksha@grandortus.com"  # Replace with your recipient address

        try:
            # Create the email message
            email_msg = EmailMessage()
            email_msg['Subject'] = message
            email_msg['From'] = sender_email
            email_msg['To'] = recipient_email
            email_msg.set_content(email_body)

            # Email sending
            if ssl._create_unverified_context():
                context = ssl._create_unverified_context()
                with smtplib.SMTP("mail.grandortus.com", 587) as server:
                    server.starttls(context=context)
                    server.login(sender_email, sender_password)
                    server.send_message(email_msg)
                    
            else:
                context = context = ssl.create_default_context(cafile="/opt/homebrew/etc/openssl@3/cert.pem")
                with smtplib.SMTP("mail.grandortus.com", 587) as server:
                    server.starttls(context=context)
                    server.login(sender_email, sender_password)
                    server.send_message(email_msg)

            return render(request, 'main/index.html', {'success_message': "Form submitted successfully!"})    
        except Exception as e:
            return HttpResponse(f"Failed to send email. Error: {str(e)}")

    return render(request, 'main/index.html')