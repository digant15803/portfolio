export const projectsData = [
    {
        id: 1,
        name: 'xv6 ‐ UNIX Like Operating System',
        description: "Implemented security and systems enhancements in the xv6 teaching OS, including secure boot with Physical Memory Protection (PMP) and hardened boot ROM/bootloader logic to ensure system integrity. Designed advanced virtual memory features such as on-demand paging, copy-on-write, and disk swapping via page-fault handling to improve memory efficiency. Built a user-level threading framework with custom scheduling and kernel–user thread coordination for efficient system calls. Additionally, developed a trap-and-emulate virtual machine model where user instructions execute natively and privileged instructions are safely emulated by the host OS acting as a VMM.",
        tools: ['C', 'QEMU', 'GDB'],
        role: 'System Developer',
        code: '',
        demo: '',
    },
    {
        id: 2,
        name: 'EdgeVision',
        description: "Built an end-to-end cloud–edge face recognition pipeline achieving an average latency of just 200ms. The system leverages an IoT → Greengrass → SQS → Lambda workflow, where IoT cameras publish frames over MQTT, an EC2-hosted Greengrass component performs edge-based MTCNN face detection, and a Lambda function handles recognition with results returned through an SQS response queue. To ensure scalability and consistency, Lambda functions were containerized with Docker and deployed via ECR. By offloading detection to the edge, the solution reduced cloud communication latency by 35% while maintaining secure, encrypted channels between IoT devices and cloud services.",
        tools: ['Python', 'AWS (EC2, Lambda, SQS, Greengrass, IoT Core, ECR)'],
        role: 'Backend Developer',
        code: '',
        demo: '',
    },
    {
        id: 3,
        name: 'SonicStream - Music Streaming Platform',
        description: 'Engineered a distributed music streaming platform achieving sub-second latency and sustaining 165+ requests/sec. Designed a hybrid database architecture with CockroachDB for consistent metadata and Cassandra for high-throughput user events. Integrated Kafka to synchronize real-time data across loosely coupled microservices and deployed global content delivery with AWS S3 + CloudFront. Optimized search functionality using Elasticsearch for fast, scalable queries across songs and artist metadata.',
        tools: ['Django', 'Kafka', 'Elasticsearch', 'CockroachDB', 'Cassandra', 'CloudFront'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
    },
    {
        id: 4,
        name: 'Sliding Window Protocol Simulator',
        description: 'Implemented a simplified Sliding Window Protocol in C to simulate TCP/IP flow control and reliable data transfer with retransmissions and acknowledgments. Tested the simulator against network anomalies such as packet loss and delay, strengthening understanding of OSI/TCP-IP models and low-level networking behavior.',
        tools: ['C', 'TCP/IP Fundamentals'],
        code: '',
        role: 'Backend Developer',
        demo: '',
    },
    {
        id: 5,
        name: 'FeelsLikeHome',
        description:'Developed a web platform to streamline hostel operations by enabling students to schedule housekeeping services and manage daily meal preferences, improving service efficiency by 30% and supporting 300+ students. Engineered a scalable backend with GraphQL, achieving 25% faster query performance and enhancing real-time data access for housekeeping and mess management.',
        tools: ['Node.js', 'Next.js', 'JWT', 'GraphQL', 'MySQL', 'Redux'],
        code: '',
        demo: '',
        role: 'Full Stack Developer',
    },
    {
        id: 6,
        name: 'EthScale',
        description:'Replaced LevelDB with MDBX in the Geth database layer, creating a more scalable architecture capable of handling high-throughput blockchain interaction data efficiently. Refactored and extracted the RPC server logic to support distributed instances, improving system concurrency and enabling balanced load distribution across nodes',
        tools: ['Golang', 'mdbx'],
        code: '',
        demo: '',
        role: 'Backend Developer',
    }
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