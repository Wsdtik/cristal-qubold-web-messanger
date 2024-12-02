import amqplib, { Connection, Channel } from 'amqplib';

class RabbitMQService {
  private connection!: Connection;
  private channel!: Channel;
  private queue: string = 'your_queue_name';

  async connect(): Promise<void> {
    try {
      this.connection = await amqplib.connect(process.env.RABBITMQ_URL || 'amqp://localhost');
      this.channel = await this.connection.createChannel();
      await this.channel.assertQueue(this.queue, { durable: true });
      console.log('Connected to RabbitMQ');
    } catch (error) {
      console.error('RabbitMQ connection error:', error);
    }
  }

  async sendMessage(message: string): Promise<void> {
    this.channel.sendToQueue(this.queue, Buffer.from(message), { persistent: true });
  }

  async consumeMessages(): Promise<void> {
    await this.channel.consume(this.queue, msg => {
      if (msg) {
        console.log('Received:', msg.content.toString());
        this.channel.ack(msg);
      }
    });
  }
}

export const rabbitMQService = new RabbitMQService();