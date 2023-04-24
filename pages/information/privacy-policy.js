import { Container, Text } from "@nextui-org/react"
export default function PrivacyPolicy() {
    return (
        <Container
            css={{
                paddingTop: "40px",
                maxWidth: "1504px",
                display: "flex",
                justifyContent: "center",
            }}
            fluid
            className="p-5"
        >
            <Text>
                <h1>Privacy Policy</h1>

                At our fashion ecommerce website, we understand how important your privacy is to you. This Privacy Policy outlines the types of personal information we collect from you when you use our website, how we use this information, and your options regarding this information.</Text>

            <h2>Information We Collect</h2>

            <Text> When you use our fashion ecommerce website, we may collect certain personal information from you, including but not limited to:</Text>
            <Text>
                Your name and contact information, such as email address, phone number, and mailing address
                Payment information, such as credit card number and billing address
                Demographic information, such as age, gender, and location
                Information about your purchases, such as the items you bought, the price you paid, and the date and time of your purchase
                Information about your device and browsing activity on our website, such as your IP address, browser type, and pages you visited
            </Text>
            <h2>How We Use Your Information</h2>

            <Text>We use your personal information to provide you with the products and services you have requested, including but not limited to:</Text>
            <Text>
                Processing your orders and payments
                Shipping your purchases to you
                Responding to your inquiries and customer service requests
                Communicating with you about our products, services, promotions, and events
                Improving our website, products, and services
                Complying with applicable laws and regulations
            </Text>

            <Text>We may also use your personal information for marketing and advertising purposes, including but not limited to:</Text>
            <Text>
                Sending you promotional emails and newsletters
                Displaying targeted ads on our website and other websites you visit
                Conducting market research and analyzing customer preferences
                We may share your personal information with third-party service providers who help us with our business operations, such as shipping companies, payment processors, and marketing agencies. We require these service providers to maintain the confidentiality and security of your personal information.
            </Text>
            <h2> Your Options</h2>
            <Text>
                You have the right to opt-out of receiving promotional emails and newsletters from us. You can also choose to disable cookies on your browser to prevent us from collecting information about your browsing activity. However, please note that disabling cookies may affect your ability to use certain features of our website.

                You have the right to request access to, correction of, or deletion of your personal information. To do so, please contact us using the contact information provided below.

                Security

                We take reasonable measures to protect your personal information from unauthorized access, use, disclosure, and destruction. We use industry-standard security technologies and procedures to safeguard your personal information.

                Changes to This Privacy Policy

                We reserve the right to modify or update this Privacy Policy at any time. If we make any material changes to this Privacy Policy, we will notify you by email or by posting a notice on our website.
            </Text>
            <h2>Contact Us</h2>
            <br />
            <br />

            <Text className="w-100">If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at 3plezee@gmail.com.</Text>

        </Container >

    )
}