
// import React, { useState } from 'react';
// import Navbar from '@/components/layout/Navbar';
// import Footer from '@/components/layout/Footer';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { useToast } from '@/hooks/use-toast';

// const Contact: React.FC = () => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false);
//       toast({
//         title: "Message sent successfully!",
//         description: "We'll get back to you as soon as possible.",
//       });
//       setFormData({
//         name: '',
//         email: '',
//         subject: '',
//         message: '',
//       });
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <main className="flex-grow container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           <Card>
//             <CardHeader>
//               <CardTitle>Send Us a Message</CardTitle>
//               <CardDescription>
//                 Have a question about custom printing? Need help with an order? We're here to help!
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="space-y-2">
//                   <label htmlFor="name" className="font-medium">Your Name</label>
//                   <Input 
//                     id="name" 
//                     name="name" 
//                     value={formData.name} 
//                     onChange={handleChange} 
//                     required 
//                   />
//                 </div>
                
//                 <div className="space-y-2">
//                   <label htmlFor="email" className="font-medium">Email Address</label>
//                   <Input 
//                     id="email" 
//                     name="email" 
//                     type="email" 
//                     value={formData.email} 
//                     onChange={handleChange} 
//                     required 
//                   />
//                 </div>
                
//                 <div className="space-y-2">
//                   <label htmlFor="subject" className="font-medium">Subject</label>
//                   <Input 
//                     id="subject" 
//                     name="subject" 
//                     value={formData.subject} 
//                     onChange={handleChange} 
//                     required 
//                   />
//                 </div>
                
//                 <div className="space-y-2">
//                   <label htmlFor="message" className="font-medium">Message</label>
//                   <Textarea 
//                     id="message" 
//                     name="message" 
//                     value={formData.message} 
//                     onChange={handleChange} 
//                     rows={5} 
//                     required 
//                   />
//                 </div>
                
//                 <Button type="submit" className="w-full" disabled={isSubmitting}>
//                   {isSubmitting ? 'Sending...' : 'Send Message'}
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
          
//           <div className="space-y-6">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Our Information</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div>
//                   <h3 className="font-semibold">Address</h3>
//                   <p className="text-muted-foreground">
//                     123 Print Avenue<br />
//                     Design District<br />
//                     Creative City, CC 12345
//                   </p>
//                 </div>
                
//                 <div>
//                   <h3 className="font-semibold">Contact</h3>
//                   <p className="text-muted-foreground">
//                     Email: info@customprints.com<br />
//                     Phone: (123) 456-7890
//                   </p>
//                 </div>
                
//                 <div>
//                   <h3 className="font-semibold">Business Hours</h3>
//                   <p className="text-muted-foreground">
//                     Monday - Friday: 9:00 AM - 6:00 PM<br />
//                     Saturday: 10:00 AM - 4:00 PM<br />
//                     Sunday: Closed
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
            
//             <Card>
//               <CardHeader>
//                 <CardTitle>Frequently Asked Questions</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div>
//                   <h3 className="font-semibold">How long does printing take?</h3>
//                   <p className="text-muted-foreground">Standard orders typically take 3-5 business days for production plus shipping time.</p>
//                 </div>
                
//                 <div>
//                   <h3 className="font-semibold">What file formats do you accept?</h3>
//                   <p className="text-muted-foreground">We accept PNG, JPG, SVG, and PDF files. For best results, vector formats like SVG are recommended.</p>
//                 </div>
                
//                 <div>
//                   <h3 className="font-semibold">Do you offer bulk discounts?</h3>
//                   <p className="text-muted-foreground">Yes! Orders of 10+ items qualify for our bulk discount. Contact us for details.</p>
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button variant="outline" className="w-full">View All FAQs</Button>
//               </CardFooter>
//             </Card>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Contact;




import Navbar from "@/components/layout/Navbar";
import React, { useState } from "react";
import Footer from "@/components/layout/Footer";
import toast from "react-hot-toast";

const faqs = [
  {
    question: "What is your return policy?",
    answer: "We offer a 15-day return policy. Items must be unused and in original packaging.",
  },
  {
    question: "How long does delivery take?",
    answer: "Standard delivery takes 3-5 business days depending on your location.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to selected international countries.",
  },
  {
    question: "Can I track my order?",
    answer: "Yes, tracking info will be emailed once your order is shipped.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, UPI, and net banking.",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // await axios.post("/api/contact", formData);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("Failed to send message!");
    }
  };

  return (
    
     
    <>
     <Navbar />
    <div className="max-w-7xl mx-auto px-4 py-16 rounded-lg shadow-md bg-blue-700 text-white">
  {/* existing content */}

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white-800 text-center mb-12">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Send us a message</h3>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message..."
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6 text-gray-700">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h4 className="text-lg font-semibold mb-1">📧 Email</h4>
              <p>support@clothstore.com</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h4 className="text-lg font-semibold mb-1">📍 Address</h4>
              <p>123 Fashion Street, Chennai, India</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h4 className="text-lg font-semibold mb-1">🕒 Business Hours</h4>
              <p>Mon - Sat: 10:00 AM - 8:00 PM</p>
           
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-text-white-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border rounded-lg p-5 shadow-sm">
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between w-full text-left font-semibold text-gray-700"
                >
                  {faq.question}
                  <span>{openIndex === index ? "-" : "+"}</span>
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-gray-600 transition">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer/>
      </div>

    </>
  );
};

export default Contact;
