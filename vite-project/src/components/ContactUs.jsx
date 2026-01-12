import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast'
import { motion } from 'motion/react'


const ContactUs = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const contactNumber = formData.get('contact_number');
        const courses = formData.get('courses');
        const qualification = formData.get('current_qualification');
        const message = formData.get('message');
        
        // Format the email body with all student details
        const emailBody = `
NEW STUDENT INQUIRY - T-Square Consultancy

═══════════════════════════════════════
STUDENT DETAILS:
═══════════════════════════════════════

Name: ${name}
Email: ${email}
Contact Number: ${contactNumber}
Course Interested: ${courses}
Current Qualification: ${qualification}

═══════════════════════════════════════
MESSAGE:
═══════════════════════════════════════

${message}

═══════════════════════════════════════
        `.trim();
        
        formData.append("access_key", "5609c915-612e-4877-8e2d-c6eeeb487fd2");
        formData.append("subject", `New Student Inquiry from ${name} - ${courses}`);
        formData.append("from_name", name);
        formData.set("message", emailBody);
        
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                toast.success('Thank you for your submission! We will contact you soon.')
                event.target.reset();
            } else {
                toast.error(data.message || 'Something went wrong. Please try again.')
            }

        } catch (error) {
            toast.error('Failed to submit form. Please try again later.')
            console.error('Form submission error:', error);
        }
    }
  return (
    <motion.div
     initial ="hidden"
     whileInView="visible"
     viewport={{ once: true }}
     transition={{ staggerChildren: 0.2}}
    id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <Title title='Reach out to us' desc='From strategy to execution,we craft digital solutions that move your business forward.' />

      <motion.form 
      initial={{ opacity: 0, y: 30}}
      whileInView={{opacity:1, y: 0}}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true}}
      onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
         <div>
            <p className='mb-2 text-sm font-medium'>Your name</p>

            <div className='flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                <img src={assets.person_icon} alt="" className='w-5 h-5' />
                <input  name="name" type="text" placeholder='Enter your name' className='w-full p-3 text-sm outline-none bg-transparent' required/>
            </div>
         </div>

         <div>
            <p className='mb-2 text-sm font-medium'>Email-id</p>
            <div className='flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                <img src={assets.email_icon} alt="" className='w-5 h-5' />
                <input name="email" type="email" placeholder='Enter your email' className='w-full p-3 text-sm outline-none bg-transparent' required/>
            </div>
         </div>
         <div>
            <p className='mb-2 text-sm font-medium'>Contact Number</p>
            <div className='flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                 <input name="contact_number" type="tel" placeholder='Enter your contact number' className='w-full p-3 text-sm outline-none bg-transparent' required/>
            </div>
         </div>

         <div>
            <p className='mb-2 text-sm font-medium'>Course Interested</p>
            <div className='flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                 <input name="courses" type="text" placeholder='e.g., B.Tech, MBA, MBBS, Law, Design' className='w-full p-3 text-sm outline-none bg-transparent' required/>
            </div>
         </div>

         <div>
            <p className='mb-2 text-sm font-medium'>Current Qualification</p>
            <div className='flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                 <input name="current_qualification" type="text" placeholder='e.g., 12th, Graduation, etc.' className='w-full p-3 text-sm outline-none bg-transparent' required/>
            </div>
         </div>



         <div className='sm:col-span-2'>
            <p className='mb-2 text-sm font-medium '>Message</p>
            <textarea name="message" rows={8} placeholder='Enter your message or additional details' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent resize-none' required/>
         </div>

         

       

         <button type="submit" className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'>
            Submit <img src={assets.arrow_icon} alt="" />
         </button>
      </motion.form>
    </motion.div>
  )
}

export default ContactUs
