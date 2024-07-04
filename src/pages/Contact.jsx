import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="container mx-auto p-6">
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-left mb-2" htmlFor="name">Name</label>
            <input className="w-full p-2 border rounded" type="text" id="name" />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2" htmlFor="email">Email</label>
            <input className="w-full p-2 border rounded" type="email" id="email" />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2" htmlFor="message">Message</label>
            <textarea className="w-full p-2 border rounded" id="message" rows="4"></textarea>
          </div>
          <Button className="mx-auto">Send Message</Button>
        </form>
      </section>
    </div>
  );
};

export default Contact;