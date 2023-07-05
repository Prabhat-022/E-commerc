document.getElementById('paymentButton').addEventListener('click', function () {
    // Initialize Rozarpay checkout
    var options = {
        key: 'YOUR_ACCESS_KEY', // Replace with your access key
        amount: 10000, // Replace with the amount to be charged
        name: 'Your Company Name', // Replace with your company name or a descriptive name
        description: 'Payment for products/services', // Replace with a description of the payment
        image: 'https://yourwebsite.com/logo.png', // Replace with the URL of your company logo
        handler: function (response) {
            // Handle the payment response
            // This function will be called when the payment is completed
            // You can perform further actions based on the response
            console.log(response);
        }
    };

    var rzp = new Razorpay(options);
    rzp.open();
});

handler: function(response) {
    // Handle the payment response
    if (response.razorpay_payment_id) {
        // Payment successful
        var paymentId = response.razorpay_payment_id;
        var signature = response.razorpay_signature;

        // Send the payment details to your server for verification and further processing
        // You should make an AJAX request to your server endpoint
        // Pass the paymentId and signature as parameters to your server

        // Example AJAX request using jQuery
        $.ajax({
            url: '/verify-payment',
            method: 'POST',
            data: {
                paymentId: paymentId,
                signature: signature
            },
            success: function (data) {
                // Payment verification successful
                console.log('Payment successful!');
                console.log(data); // You can do further processing with the response from your server
            },
            error: function (xhr, status, error) {
                // Payment verification failed
                console.log('Payment verification failed.');
                console.log(error); // You can handle the error appropriately
            }
        });
    } else {
        // Payment unsuccessful or canceled
        console.log('Payment unsuccessful or canceled.');
    }
}
