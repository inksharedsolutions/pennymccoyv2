import React from 'react'


const Newsletter = ()=>{


    function OnSubmitForm (e) {

	    e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                alert("Successfully Sent!");
            } else {
            	console.log('something went wrong')
            }
        };

        xhr.send(data);
       
    }

    return (
        <>
            <section className="newsletter-section">
                <div className="container-gt">                    
                    <form 
                        onSubmit={OnSubmitForm}
                        method="POST"
                        action="https://formspree.io/f/mknkvenn">

                        <div className="form-newsletter-wrapper">
                            <input name="author_name" type="hidden" value="Penny McCoy" />
                            <input name="email" type="email" placeholder="Enter email" required/>
                            
                            <button>
                                <input type="submit" name="submit" />
                            </button>
                        </div>
                        
                    </form>
                </div>
            </section>
        </>
    )
}

export default Newsletter