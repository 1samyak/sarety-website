// Form Validation
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Clear previous errors
        document.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('error');
        });

        // Validate form
        const isValid = validateForm();

        if (isValid) {
            // Submit form (in real scenario, send to server)
            submitForm();
        }
    });
}

function validateForm() {
    const form = document.getElementById('contactForm');
    const formGroups = form.querySelectorAll('.form-group');
    let isValid = true;

    formGroups.forEach(group => {
        const input = group.querySelector('input, select, textarea');
        const errorMessage = group.querySelector('.error-message');
        
        if (!input) return;

        let error = '';

        // Check if field is required
        if (input.hasAttribute('required') && input.value.trim() === '') {
            error = 'This field is required';
        }
        // Validate email
        else if (input.type === 'email' && input.value.trim() !== '') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                error = 'Please enter a valid email address';
            }
        }
        // Validate phone
        else if (input.type === 'tel' && input.value.trim() !== '') {
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (!phoneRegex.test(input.value)) {
                error = 'Please enter a valid phone number';
            }
        }
        // Validate message length
        else if (input.name === 'message' && input.value.trim().length < 10) {
            error = 'Message must be at least 10 characters long';
        }

        // Show error if exists
        if (error) {
            group.classList.add('error');
            if (errorMessage) {
                errorMessage.textContent = error;
            }
            isValid = false;
        } else {
            group.classList.remove('error');
        }
    });

    return isValid;
}

function submitForm() {
    const form = document.getElementById('contactForm');
    const formMessage = form.querySelector('.form-message');
    
    // Collect form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Simulate sending form (replace with actual API call)
    console.log('Form submitted:', data);

    // Show success message
    formMessage.textContent = 'Thank you! Your message has been sent successfully. We will get back to you soon.';
    formMessage.classList.add('success');
    formMessage.classList.remove('error');

    // Reset form
    form.reset();

    // Hide success message after 5 seconds
    setTimeout(() => {
        formMessage.classList.remove('success');
    }, 5000);
}

// Real-time validation
const formInputs = document.querySelectorAll('#contactForm input, #contactForm select, #contactForm textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        validateField(input);
    });

    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('error')) {
            validateField(input);
        }
    });
});

function validateField(input) {
    const group = input.closest('.form-group');
    const errorMessage = group.querySelector('.error-message');
    let error = '';

    // Check if field is required
    if (input.hasAttribute('required') && input.value.trim() === '') {
        error = 'This field is required';
    }
    // Validate email
    else if (input.type === 'email' && input.value.trim() !== '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
            error = 'Please enter a valid email address';
        }
    }
    // Validate phone
    else if (input.type === 'tel' && input.value.trim() !== '') {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(input.value)) {
            error = 'Please enter a valid phone number';
        }
    }
    // Validate message length
    else if (input.name === 'message' && input.value.trim().length < 10 && input.value.trim() !== '') {
        error = 'Message must be at least 10 characters long';
    }

    // Update UI
    if (error) {
        group.classList.add('error');
        if (errorMessage) {
            errorMessage.textContent = error;
        }
    } else {
        group.classList.remove('error');
    }
}

// Character counter for textarea
const textarea = document.querySelector('textarea[name="message"]');
if (textarea) {
    textarea.addEventListener('input', () => {
        const maxLength = 5000;
        if (textarea.value.length > maxLength) {
            textarea.value = textarea.value.substring(0, maxLength);
        }
    });
}

// Form reset button (if exists)
const resetButtons = document.querySelectorAll('button[type="reset"]');
resetButtons.forEach(button => {
    button.addEventListener('click', () => {
        const form = button.closest('form');
        form.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('error');
        });
        form.reset();
    });
});
