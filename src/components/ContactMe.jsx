import { useState } from 'react';
import emailjs from '@emailjs/browser';


export default function ContactMe() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    });



    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send("service_79ae6y2", "template_ejv2yai", formData, "GwIsHXRkx6Lf4id1w").then(() => {
            alert('Message sent successfully!');
            setFormData({
                fullName: '',
                email: '',
                subject: '',
                message: ''
            });
        }, (error) => {
            alert('Failed to send message, please try again', error.text);
        })
        console.log('Form submitted:', formData);

    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen py-20 xl:px-50">
            <h1 className="text-primary-content text-4xl font-bold mb-10  py-5 relative">
                Contact Me
                <span className="absolute left-0 bottom-0 w-24 border-b-2 border-primary-content"></span>
            </h1>
            <p className="text-primary-content mb-10">
                Drop Me a Message
            </p>
            <div className="mt-10 max-w-xl sm:mt-15">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6">
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-semibold leading-6 text-primary-content">
                            Full Name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="block w-full rounded-md bg-base-200 px-3.5 py-2 text-base text-primary-content outline outline-1 -outline-offset-1 outline-base-300 placeholder:text-secondary-content/50 focus:outline-2 focus:-outline-offset-2 focus:outline-success"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-primary-content">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="block w-full rounded-md bg-base-200 px-3.5 py-2 text-base text-primary-content outline outline-1 -outline-offset-1 outline-base-300 placeholder:text-secondary-content/50 focus:outline-2 focus:-outline-offset-2 focus:outline-success"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-primary-content">
                            Subject
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                value={formData.subject}
                                onChange={handleChange}
                                className="block w-full rounded-md bg-base-200 px-3.5 py-2 text-base text-primary-content outline outline-1 -outline-offset-1 outline-base-300 placeholder:text-secondary-content/50 focus:outline-2 focus:-outline-offset-2 focus:outline-success"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-primary-content">
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="block w-full rounded-md bg-base-200 px-3.5 py-2 text-base text-primary-content outline outline-1 -outline-offset-1 outline-base-300 placeholder:text-secondary-content/50 focus:outline-2 focus:-outline-offset-2 focus:outline-success"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <button
                        onClick={sendEmail}
                        className="block w-full rounded-md bg-success px-3.5 py-2.5 text-center text-sm font-semibold text-base-100 shadow-sm hover:bg-success/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success transition-colors"
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    );
}