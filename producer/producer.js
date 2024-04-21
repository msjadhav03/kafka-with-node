const { Kafka } = require("kafkajs");

// Creating Kafka Client
const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

// Creating Producer
const producer = kafka.producer();

// Method to produce Sensor data
const produce = async () => {
  try {
    // Connecting Producer to Kafka Server
    await producer.connect();

    // Generating random data

    // Producing data every 2 second
    setInterval(async () => {
      //   let randomValue = Math.floor(Math.random() * 100);

      let message = {
        key: "data",
        value: JSON.stringify({
          current_temp: Math.floor(Math.random() * 100) - 40,
          humidity: Math.floor(Math.random() * 100) - 30,
          wind_speed: Math.floor(Math.random() * 100) - 50,
          visability: 1,
        }),
      };
      // Sending data through Producer to Kafka Server
      await producer.send({
        topic: "test-topic",
        messages: [message],
      });
    }, 5000);
  } catch (error) {
    // Catching Error if anything fails
    console.log(`Error Catched !!!`, error);
  }
};

produce();
