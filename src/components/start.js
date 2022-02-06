import React, { Component } from 'react';
import '../assets/main.css';
import Nav from './nav';
import Footer from './Footer';


export default class Start extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            currency: 'GBP',
            percent: '5'
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleCurrency = this.handleCurrency.bind(this);
        this.handleSlider = this.handleSlider.bind(this);
      }
    
      handleChange(a) {
        this.setState({amount: a.target.value});
        this.runtip();
        
      }    
      handleCurrency(e) {
          this.setState({currency: e.target.value})

      }
      handleSlider(p) {
          this.setState({percent : p.target.value})
          this.runtip()
          
      }
      runtip() {
        var amount = document.getElementById('customValue').value;
        var tipRate = document.getElementById('customTip').value;
        var tipValue = document.querySelector('#tipValue');

        
            var perc = tipRate/100;
            var totalTip = perc * amount;
            var totalTipFormat = totalTip.toLocaleString(undefined, { minimumFractionDigits: 2 });

            tipValue.innerText = totalTipFormat;
      }

  render() {
    return (
    <div>
        <Nav />
        <div className='flex w-screen h-[78vh] justify-center items-center antialiased '>
            <form id="formMain" className='block mx-8 lg:px-1'>
                <span className='mb-2 text-gray-200 text-xs font-normal block'>Select currency and start typing total amount</span>
                <select value={this.state.currency} onInput={this.handleCurrency} className='block md:inline p-3 px-4 text-xl bg-gray-700 text-white focus:outline-none'>
                    <option value=''>No Currency</option>
                    <option value='USD'>United States Dollar (USD)</option>
                    <option value='CAD'>Canadian Dollar (CAD)</option>
                    <option value='AUD'>Austrialian Dollar (AUD)</option>
                    <option value='EUR'>Euro (EUR)</option>
                    <option value='GBP'>British Pound (GBP)</option>
                    <option value='NGN'>Nigerian Naira (NGN)</option>
                    <option value='ZAR'>South African Rand (ZAR)</option>
                    <option value='GHS'>Ghanian Cedi (GHS)</option>
                    <option value='INR'>Indian Rupee (INR)</option>
                    <option value='RUB'>Russian Ruble (RUB)</option>
                    <option value='SKW'>South Korean Won (SKW)</option>
                    <option value='CNY'>Chinese Yuan (CNY)</option>
                    <option value='JPY'>Japanese Yen (JPY)</option>
                    <option value='MXN'>Mexican Peso (MXN)</option>
                    <option value='AED'>UAE Dirham (AED)</option>
                </select>

                <input type='number' value={this.state.amount} onChange={this.handleChange} className='block mt-5 md:mt-0 md:inline p-3 px-4 bg-gray-700 text-xl focus:outline-none text-white' min='1' minLength='1' id='customValue' required='required' placeholder='0.00'/> 

                <div className='block mt-3'>
                    <input type='range' min='1' max='80' value={this.state.percent} onChange={this.handleSlider} className='w-2/3' id='customTip'/>
                <span className='tipRate text-white px-3 font-extrabold text-sm'>{this.state.percent}%</span>
                <span className='mb-2 text-gray-200 text-[12px] font-normal block'>How much do you want to tip?</span>
                </div>
                
                <div className='block mt-5 text-4xl text-sky-600 font-extrabold'>{this.state.currency} <span id='tipValue'>0.00</span></div>
            </form>
           
        
        </div>
         <Footer />
    </div>
    );
  }
}
