import PageFooter from "../../elements/page-footer/page-footer";
import PageHeader from "../../elements/page-header/page-header";
import './landing-page.css';
import montraFinal from '../../../assets/images/montraFinal.png';
import applelogo from '../../../assets/images/applelogo.png';
import googleLogo from '../../../assets/images/googlePlay.png';
import paymentqr from '../../../assets/images/paymentqr.png';
import mainimg from '../../../assets/images/main-img.png'
import banking from '../../../assets/images/banking.png'
import lending from '../../../assets/images/lending.png'
import m from '../../../assets/images/m.png'
import arrow from '../../../assets/images/arrow.png'
import wallet from '../../../assets/images/wallet.png'
import bank from '../../../assets/images/bank.png'
import donate from '../../../assets/images/donate.png'
import shield from '../../../assets/images/shield.png'
import gold from '../../../assets/images/gold.png'
import cart from '../../../assets/images/cart.png'
import mobilepayment from '../../../assets/images/mobilepayment.png'
import profit from '../../../assets/images/profit.png'
import chatting from '../../../assets/images/chatting.png'
import chatnotification from '../../../assets/images/chatnotification.png'
import store from '../../../assets/images/store.png'
import book from '../../../assets/images/book.png'


function LandingPage() {
    return (

        <div >
            <PageHeader />
            {/* section 1 */}

            <section className="bg-section-first p-relative">
                {/* page-header-2 */}
                <div className="justify-between pad-section align-center">
                    <section>
                        <div className="tabs">
                            <span className="active">
                                Personal
                            </span>
                            <span className="pl-2">
                                Business
                            </span>
                        </div>
                    </section>
                    <section>
                        <ul>
                            <li>
                                <img src={wallet} alt="" className="mr-2" />
                                Payment
                            </li>
                            <li>
                                <img src={bank} alt="" className="mr-2" />
                                Banking
                            </li>
                            <li>
                                <img src={donate} alt="" className="mr-2" />
                                Lending
                            </li>
                            <li>
                                <img src={shield} alt="" className="mr-2" />
                                Insurance
                            </li>
                            <li>
                                <img src={gold} alt="" className="mr-2" />
                                Investment
                            </li>
                            <li>
                                <img src={cart} alt="" className="mr-2" />
                                Shopping
                            </li>
                        </ul>
                    </section>

                    <section>
                        <button className="theme-btn">
                            Montra Sign in
                        </button>
                    </section>
                </div>

                <div className="row ">
                    <div className="col-5 center-div pl8">
                        <div className="text-head">
                            Powering Digital <br />
                            Payments Lending <br />
                            for Everyone
                        </div>
                        <div class="text-description py-3">
                            Marketplaces for multiparty payments, Lending,<br />
                            Insurance Investment Products
                        </div>
                        <button className="download-btn white w-40">Download
                            <img src={montraFinal} className="px-1" alt="" />
                            <img src={applelogo} alt="" />
                            <img src={googleLogo} className="pl-1" alt="" />
                        </button>
                    </div>
                    <div className="col-7 mt-5  text-right ">
                        <div class="">
                            <img src={mainimg} alt="" />
                            {/* <img src={m} alt="" /> */}
                        </div>
                    </div>
                </div>
                <div className="arrow">
                    <img src={arrow} alt="" />
                </div>
            </section>

            {/* section 2 */}
            <section class="pl8 my-5">
                <div className="row pt-5">
                    <div className="col-5">
                        <div className="payment-head align-center"><img src={wallet} alt="" className="mr-2" />Payments</div>
                        <div className="payment-description py-3">Pay anyone directly from your <br />
                            <span className="fw-700">bank accounts</span> or linked <span className="fw-700">cards</span></div>
                        <button className="download-btn blue">Download

                            <img src={montraFinal} className="px-1" alt="" />
                            <img src={applelogo} alt="" />
                            <img src={googleLogo} className="pl-1" alt="" />
                        </button>
                    </div>
                    <div className="col-7">
                        <div className="row">
                            <div className="col-6">
                                <img src={paymentqr} alt="" width={'100%'} />
                            </div>
                            <div className="col-6 font-12">
                                <div class="bg-gray mt-5">
                                    <div className="fw-600 mb-2 font-14">Scan and pay</div>
                                    <div className="row mb-2">
                                        <div className="col-2">Step:1</div>
                                        <div className="col-10">Scan the QR code of a Montra merchant or enter the Mobile Number</div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-2">Step:2</div>
                                        <div className="col-10">Enter the amount</div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-2">Step:3</div>
                                        <div className="col-10">Select from multiple Bank Accounts or Cards you have linked to Montra personal appr</div>
                                    </div>   <div className="row mb-2" >
                                        <div className="col-2">Step:4</div>
                                        <div className="col-10">Enter your Payment PIN</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-2">Step:5</div>
                                        <div className="col-10">Initiate Payment request</div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="col-8 mt-3">
                    <div className="row">
                        <div className="col-4">
                            <img src={mobilepayment} alt="" className="mb-3" />
                            <div className="text-left-border">Scan Pay</div>
                            <div className="mt-3 col-8">
                                Scan QR code of any Montra Merchant using Personal App & simply make payment directly f
                            </div>
                        </div>

                        <div className="col-4">
                            <img src={profit} alt="" className="mb-3" />

                            <div className="text-left-border">Fund Transfer</div>
                            <div className="mt-3 col-8">
                                Transfer Funds to any bank account directly from your bank accounts linked to your App
                            </div>
                        </div>

                        <div className="col-4">
                            <img src={chatting} alt="" className="mb-3" />

                            <div className="text-left-border">Chat Pay</div>
                            <div className="mt-3 col-8">
                                Chat with other Montra users & send or receive payments while chatting
                            </div>
                        </div>

                        <section className="row mt-5">
                            <div className="col-4">
                                <img src={store} alt="" className="mb-3" />

                                <div className="text-left-border">Payment Marketplace</div>
                                <div className="mt-3 col-8">
                                    Our payment Marketplace offers access to payment services such as buy Airtime, Data & DTH .
                                </div>
                            </div>

                            <div className="col-4">
                                <img src={book} alt="" className="mb-3" />

                                <div className="text-left-border">Transaction History</div>
                                <div className="mt-3 col-8">
                                    Get an easy access to track all your transactions on your Personal Montra app
                                </div>
                            </div>

                            <div className="col-4">
                                <img src={chatnotification} alt="" className="mb-3" />

                                <div className="text-left-border">Payment Reminders</div>
                                <div className="mt-3 col-8">
                                    We will notify you about the upcoming payments on Montra Personal app
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </section>


            {/* section 3 */}

            <section className="row bg-skyblue pl8 mt-5 py-5 ht-540">
                <div className="col-5 center-div">
                    <div className="payment-head">Banking</div>
                    <div className="payment-description py-3">
                        <span className="fw-700"> Open a bank account <br /> instantly </span> with our partner <br />  banks and operate through <br />  our Agent Network
                    </div>
                    <button className="download-btn blue w-40">Download
                        <img src={montraFinal} className="px-1" alt="" />
                        <img src={applelogo} alt="" />
                        <img src={googleLogo} className="pl-1" alt="" />
                    </button>
                </div>
                <div className="col-7 m-auto">
                    <img src={banking} alt="" />
                </div>
            </section>


            {/* section 4 */}
            <section className="row bg-skyblue">
                <div className="col-6">
                    <div className="row">
                        <div className="col-8">
                            <div class="bg-white center-div">
                                <div className="fw-700 mb-2 font-18 blue">Agency Banking</div>
                                <div className="row mb-2">
                                    <div className="col-2">Step:1</div>
                                    <div className="col-10">Open a new Bank account or use an exiting bank account linked </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-2">Step:2</div>
                                    <div className="col-10">Customer or Merchant enters the amount customer </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-2">Step:3</div>
                                    <div className="col-10">App generates QR code with amount details on Personal </div>
                                </div>   <div className="row mb-2" >
                                    <div className="col-2">Step:4</div>
                                    <div className="col-10">Customer Agent scan the QR code to initiate the transaction</div>
                                </div>
                                <div className="row">
                                    <div className="col-2">Step:5</div>
                                    <div className="col-10">Montra facilitates the transaction of payment from /Customer t</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div class="bg-agency-banking">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 center-div pl-4">
                    <div className="row">
                        <div className="col-6">
                            <div className="text-left-border">Account Opening</div>
                            <div className="mt-3 col-8">
                                Customers can open a bank account instantly with any of our parner banks
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="text-left-border">KYC</div>
                            <div className="mt-3 col-8">
                                Customers can submit documents and complete kyc through Montra personal app for the newly opened account
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">

                        <div className="col-6">
                            <div className="text-left-border">Agency Banking</div>
                            <div className="mt-3 col-8">
                                Scan QR code of any Montra Merchant using Personal App and simply make payment directly from any of your bank Accounts
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="text-left-border">Agency  Banking Statement</div>
                            <div className="mt-3 col-8">
                                Scan QR code of any Montra Merchant using Personal App  and simply make payment directly from any of your bank accounts
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div>
                    <img src={cuttingedge} alt=""/>
                </div> */}
            </section>

            {/* section 5 */}
            <section className="bg-img pl8 pt7">
                <div className="row">
                    <div className="col-6 center-div">
                        <div className="payment-head">Lending</div>
                        <div className="payment-description white py-3">
                            <span className="fw-700">  Compare the loan offers from  <br />our Lending Partners and </span>  get  <br /> them disbursed instantly in  <br /> your bank accounts
                        </div>
                        <button className="download-btn blue w-40">Download
                            <img src={montraFinal} className="px-1" alt="" />
                            <img src={applelogo} alt="" />
                            <img src={googleLogo} className="pl-1" alt="" />
                        </button>
                    </div>
                    <div className="col-6 m-auto">
                        <div className="p-relative">
                            <img src={lending} alt="" />
                        </div>
                    </div>
                </div>


                <div className="col-8 mt-5 pt-5">
                    <div className="row white">
                        <div className="col-4">
                            <div className="text-left-border-white">Compare Loan Offers</div>
                            <div className="mt-3 col-8">
                                Customers can apply for variety of Instant  and Other loan products offered by our Lending partners on Montra Personal app                            </div>
                        </div>

                        <div className="col-4">
                            <div className="text-left-border-white">Instant Loan Disbursements</div>
                            <div className="mt-3 col-8">
                                Upon successfully submitting loan applications for Instant Loan products, Montra get the amount disbursed into customers’ bank accounts instantly                            </div>
                        </div>

                        <div className="col-4">
                            <div className="text-left-border-white">Track Loan Applications</div>
                            <div className="mt-3 col-8">
                                Customers can track the status of the loans applied on Montra Personal app to see their status                            </div>
                        </div>

                        <section className="row mt-5">
                            <div className="col-4">
                                <div className="text-left-border-white ">Make Loan Repayments</div>
                                <div className="mt-3 col-8">
                                    Customers can initiate payment of Due monthly installments on Montra Personal app                                </div>
                            </div>

                            <div className="col-4">
                                <div className="text-left-border-white ">View Loan Statements</div>
                                <div className="mt-3 col-8">
                                    Customers can view Loan Statements for all the loans they have availed on Montra Personal app                                </div>
                            </div>

                            <div className="col-4">
                                <div className="text-left-border-white">Get Payment Reminders</div>
                                <div className="mt-3 col-8">
                                    Montra sends alerts reminding Customers to pay against the due & delinquent amounts for them to avoid paying penal charges                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </section>
            <PageFooter />
        </div>
    );
}

export default LandingPage;
