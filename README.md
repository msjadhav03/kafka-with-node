# Kafka.js with Node.js 🚀

## Kafka 📊

1. `Distributed Streaming Platform` - real-time data pipeline 🌊
2. `Topic and partitions` 🗂️
   Data organized in topics and topics divided into partitions. Each partition is an ordered, immutable sequence of records, and multiple partitions allow for parallelism and scalability 🔄

3. `Brokers` 🖥️
   Servers that store and manage the topic partitions 📦
4. `Kafka Cluster` 🌐
   Consists of multiple brokers to maintain data redundancy, fault tolerance, and scalability 🛠️
5. `Producer` 🎬
   Responsible for publishing data records to Kafka topics 📤
6. `Consumer` 🧑‍💼
   Reads data records from Kafka topics. They can subscribe to one or more topics and consume data in real-time 🕰️
7. `Connectors` 🔗
   Kafka Connect is a framework for building and running connectors that move data between Kafka and other systems. Connectors simplify the integration of Kafka with databases, messaging systems, and other data sources/sinks 🔄
8. `Scalability and Fault Tolerance` ⚖️
   Designed to be horizontally scalable and fault-tolerant. - Scalability by partitioning data across multiple brokers - Fault Tolerance by replicating data partitions across multiple brokers 🛡️
9. `Retention and Compaction` 🗄️
   Retain data for a configurable period, allowing consumers to replay historical data. Retention policies can be set based on time or size 🕰️
10. `Stream and Stream Processing` 🌊
    Kafka Streams is a client library for building real-time stream processing applications. Enables developers to write scalable, fault-tolerant, stateful stream processing 🌊
11. `Security` 🔒
    Provides security features such as SSL/TLS encryption, authentication, and authorization to ensure data confidentiality and integrity 🛡️

12. Used for:
    - Real-time analytics 📈
    - Log aggregation 📋
    - Event Sourcing 📜
    - Messaging systems 💌
    - Microservice Architecture 🏗️
