## Introduction

This is a full-stack patient portal built for Gwinnett Pulmonary & Sleep featuring appointment creation capabilities. The front-end of the application is built with Next.js, a JavaScript framework which allows for server-side rendering and simple API endpoint creation, and Tailwind CSS, a CSS framework using utility classes to create modern and responsive web applications. The back-end uses Google’s Cloud Firestore database, a real-time, document database (JSON) which is connected to our front-end using Firebase webhooks. Other additions include OAuth integration which enabled the use of Facebook login and token access.

![Patient Portal Mockup](https://user-images.githubusercontent.com/84104582/167009991-17258aab-b164-423f-9463-d7eaad443fa8.png)

[Click here to view application](https://gps-patient-portal.vercel.app/)

## Problem(s)

Client (Gwinnett Pulmonary & Sleep) required a new front-end for their patient portal (originally in Athena EMR) to provide better user experience, add functionality, and improve SEO performance. In addition, the back-end workflow architecture needed to be simplified (multiple databases in Athena, Phreesia, and Klara not communicating with each other when booking an appointment) which required the IT staff to manually input and confirm appointment bookings (process maps shown below).

## Process Maps

As-Is Workflow
[GPS Portal New Patient Appointment Workflow.pdf](https://github.com/stephenfcan/gps_patient-portal/files/8636084/GPS.Portal.New.Patient.Appointment.Workflow.pdf)
<img width="983" alt="Screen Shot 2022-05-05 at 5 20 42 PM" src="https://user-images.githubusercontent.com/84104582/167027600-4f4800e4-4a41-444b-84cc-dc344ea33843.png">

To-Be Workflow
[GPS Portal New Patient Appointment Workflow To-Be.pdf](https://github.com/stephenfcan/gps_patient-portal/files/8636093/GPS.Portal.New.Patient.Appointment.Workflow.Copy.pdf)
<img width="965" alt="Screen Shot 2022-05-05 at 5 19 19 PM" src="https://user-images.githubusercontent.com/84104582/167027421-98ce3fe6-29a2-453d-ae5d-68841fd640b7.png">

## Solution

The solution for the client was completed in three parts. First, the team created a responsive front-end that revamped the user experience and enabled lightweight server-side rendering. Second, the back-end applications (Athena, Phreesia, Klara) were re-routed in ServiceNow's Automation Engine to allow all new and existing records to be combined into one unified data architecture. Finally, the team were then able to use the ServiceNow database to automatically confirm appointments and update front-end views for both the patient and doctor(s).

## Demo

The following instructions demonstrate the ability to login/sign-up to the patient potal, to view the primary dashboard, and to create an appointment.

Instructions:
1. Open the patient portal at https://gps-patient-portal.vercel.app/
2. To login/sign-up click “Login with Facebook” which will redirect you to either Facebook to sign into Facebook if you haven’t already or to the app homepage. You should now be able to view Appointments Info, Recent Activity, Medications, Current Conditions, and Billing Info via the dashboard.
3. To create an appointment, navigate to the “Appointments” tab on the left sidebar. You should now see your created appointments, if any.
4. Click “Schedule an Appointment” and complete the resulting form. After completion, click the Enter key or “Schedule Appointment”. You should now be able to see the confirmed appointment booking fetched by the Firestore database. The home dashboard is also updated on the Recent Activity block to show the newly created appointment.


