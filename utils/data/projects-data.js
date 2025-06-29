export const projectsData = [
    {
        id: 1,
        name: 'ByteAcademy',
        description: "ByteAcademy is a MOOC (Massive Open Online Course) platform built by me and my team using Java and Spring Boot. I was responsible for developing scalable RESTful APIs, implementing user authentication and role-based authorization using Spring Security with JWT and OAuth2. The application uses PostgreSQL for data persistence, Redis for caching, and JasperReports for dynamic PDF certificate generation. We integrated Firebase to send real-time in-app notifications. The system supports unit testing using JUnit and was deployed using Railway, with collaborative version control handled via GitHub.",
        tools: ['Spring Boot','PostgreSQL','Spring Security','Docker','JUnit','Maven','Swagger','Jasper Report','Redis','Quartz Scheduler','Firebase','GIT'],
        role: 'Backend Developer',
        code: '',
        demo: '',
    },
    {
        id: 2,
        name: 'BadStore Pentest',
        description: 'I conducted a full penetration test on BadStore, a deliberately vulnerable web application used for security testing and education. My tasks included reconnaissance, vulnerability assessment, and exploiting common web vulnerabilities such as XSS, SQL Injection, Command Injection, CSRF, and Broken Authentication. I documented all findings and provided remediation guidance. The assessment followed OWASP Top 10 methodology and included manual testing and automated scanning using tools like Burp Suite, Nikto, and Nmap.',
        tools: ['Burp Suite', 'OWASP ZAP', 'Nikto', 'Nmap', 'Kali Linux', 'SQLMap'],
        role: 'Pentester',
        code: '',  
        demo: '',  
    },
    {
        id: 3,
        name: 'Wireless Network Implementation with CAPsMAN',
        description: 'I implemented a wireless network infrastructure in a corporate environment using MikroTik RouterOS with CAPsMAN (Centralized Access Point Management). The project involved configuring the main CAPsMAN controller, registering CAP devices (CAPs), setting up SSID, VLAN, and security profiles for centralized wireless control. I also configured DHCP, firewall, and bandwidth management to ensure a stable and secure network. Performance testing was conducted to evaluate coverage, interference, and load handling in multi-floor office deployment.',
        tools: ['MikroTik RouterOS', 'Winbox', 'CAPsMAN', 'DHCP Server', 'Firewall', 'VLAN', 'Bandwidth Management', 'Wireless Tools'],
        role: 'Network Engineer',
        code: '',
        demo: '',
      },      
      {
        id: 4,
        name: 'Kos Booking Platform',
        description: "I developed a web-based room rental (kos) booking platform using Laravel as the main backend framework. The application supports user authentication, room listing management, booking history, and admin dashboards. I used Filament for building an elegant and responsive admin panel, MySQL for data storage, and TailwindCSS for UI styling. The platform allows users to view room availability, make bookings, and manage their profiles. Admins can manage kos data, tenants, and transaction records efficiently.",
        tools: ['Laravel', 'MySQL', 'Filament', 'Tailwind CSS', 'Blade'],
        code: '',
        demo: '',
        role: 'Full Stack Developer',
      },
      {
        id: 5,
        name: 'Port Scanner',
        description: "Port Scanner is a powerful Python-based tool designed for scanning open ports on target hosts. It supports flexible port range input, multithreading for faster scans, and banner grabbing for service identification. The CLI features colorful output for better readability and the results can be exported to text or CSV format. This tool is ideal for penetration testers, system administrators, and network security professionals seeking to assess open services on their infrastructure.",
        tools: ['Python', 'Socket', 'Threading', 'Colorama', 'CSV', 'Argparse'],
        code: '', 
        demo: '',  
        role: 'Python Developer',
      },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },