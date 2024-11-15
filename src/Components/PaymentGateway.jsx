import React from 'react'
import BNNavbar from './BNNavbar'

const PaymentGateway = () => {
    return (
        <div>
            <BNNavbar Pborderbt={"border-b-2 border-green-300 text-green-600"} />
            <div>
                <div className="flex flex-col items-center justify-center min-h-[60vh]">
                    <h1 className="text-2xl font-semibold mb-4">Payment Gateway Integration</h1>
                    <p className="text-gray-600">Payment processing functionality will be implemented here</p>
                    <div className="mt-4">
                        <span className="text-sm text-gray-500">Supported payment methods coming soon</span>
                    </div>
                    <p className="text-gray-600 mt-6 text-center">Thank you for visiting ShopKart 3.0. We appreciate your interest in our platform and value your time spent exploring our works.</p>
                </div>
            </div>
        </div>
    )
}

export default PaymentGateway