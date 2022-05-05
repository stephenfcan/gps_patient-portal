## Introduction

This is a full-stack patient portal built for Gwinnett Pulmonary & Sleep featuring appointment creation capabilities built with Next.js, React.js, NextAuth, TailwindCSS, and Google Firebase.

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

Creation of a new mobile-friendly front-end application with a unified data architecture and workflow through ServiceNow.
