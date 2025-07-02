# 💇‍♀️ Salon Booking Application

A web-based platform that streamlines the process of booking appointments at salons. Users can browse available services, check stylist availability, and manage their bookings—all in real-time. Designed for both customers and salon managers with dynamic role-based functionality.

## 🚀 Features

- User authentication and role-based access (Admin, Stylist, Customer)
- Real-time appointment booking and availability sync
- Manage services, slots, and stylist schedules
- Admin dashboard with analytics and reporting
- Email notifications for booking confirmations and updates
- Responsive UI for both desktop and mobile devices

## 🛠 Tech Stack

| Layer            | Technologies                                                  |
|------------------|---------------------------------------------------------------|
| Backend          | Java, Spring Boot, Hibernate, MySQL/PostgreSQL                |
| Frontend         | React.js, Redux, Tailwind CSS                                 |
| Real-time Comm.  | WebSocket (Spring Boot + Socket.IO)                           |
| Containerization | Docker, Docker Compose                                       |
| Orchestration    | Kubernetes (for scalable deployment, optional)               |
| Authentication   | Keycloak + JWT                                                |
| Messaging Queue  | RabbitMQ (optional, for async booking queue)                 |

## 🏁 Getting Started

### Prerequisites

- Java 17+
- Node.js & npm
- Docker & Docker Compose
- PostgreSQL/MySQL
- Keycloak setup (if not mocked)

### Backend Setup

```bash
cd backend
./mvnw clean install
java -jar target/salon-app.jar
