import './form.scss';

const Form = () => {
    return (
        <div className='contact-form'>
            <form action=''>
                <h6 className='title'>Message Me</h6>
                <div className='form-wrapper'>
                    <div className='form-group'>
                        <input className='form-control' id='contact-name' type='text' name='name' placeholder='Name' required='' />
                    </div>
                    <div className='form-group'>
                        <input className='form-control' id='contact-email' type='email' name='email' placeholder='Email' required='' />
                    </div>
                    <div className='form-group'>
                        <input className='form-control' id='contact-subject' type='text' name='subject' placeholder='Subject' required='' />
                    </div>
                    <div className='form-group form-message'>
                        <textarea className='form-control' id='contact-message' name='message' placeholder='Message' rows='5' required=''></textarea>
                    </div>
                    <div className='form-group form-submit'>
                        <button className='button form-button' id='contact-submit' type='button'>Send Message</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;