from django.shortcuts import render, redirect
from django.http import HttpResponse
import ssl
import smtplib
import os



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

def jobOpeningForm(request):
    return render(request, 'main/JobOpeningForm.html')

def indexContactForm(request):
    if request.method == 'POST':
        name = request.POST.get('name', '').strip()
        email = request.POST.get('email', '').strip()
        phoneNo = request.POST.get('phone', '').strip()
        services = request.POST.get('services', '').strip()
        message = request.POST.get('message', '').strip()

        email_body = f"""
        Name: {name}
        Email: {email}
        Phone No: {phoneNo}
        Subject: {services}
        Message:
        {message}
        """
        print('emailbody: ', email_body)
        sender_email = os.getenv("SENDER_EMAIL", "akanksha@grandortus.com")
        sender_password = os.getenv("SENDER_PASSWORD", "Avyansh@2020")
        recipient_email = "piyush.r@grandortus.com"  # Replace with your recipient address

        try:
            # Email sending
            context = ssl.create_default_context(cafile="/opt/homebrew/etc/openssl@3/cert.pem")
            with smtplib.SMTP("mail.grandortus.com", 587) as server:
                server.starttls(context=context)
                server.login(sender_email, sender_password)
                server.sendmail(
                    sender_email,
                    [recipient_email],
                    f"Subject: {services}\n\n{email_body}"
                )
            return redirect('index')
        except Exception as e:
            return HttpResponse(f"Failed to send email. Error: {str(e)}")

    return render(request, 'main/index.html')