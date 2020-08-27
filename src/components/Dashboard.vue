<template>
    <div class="dashboard">
        <div style="width: calc(100% - 20px);position:relative;border:1px solid #c0c0c0;margin: 10px;height:195px;float: left;display: flex;justify-content: space-evenly;padding: 10px 0px;">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="400" height="190" viewBox="0 0 566.9 250.8" style="enable-background:new 0 0 566.9 250.8" xml:space="preserve"><g> <g> <g> <path class="st0" d="M129.3,231.4h8.9c3.2,0,5.7,1.5,5.7,4.8c0,1.5-0.9,2.9-2,3.4c2.2,0.5,3.8,2.4,3.8,4.9c0,3.9-3,6-7.3,6h-9.2 V231.4z M138.1,238.6c1.5,0,2.3-0.8,2.3-2.1c0-1.3-0.8-2.2-2.5-2.2h-5.2v4.3H138.1z M138.3,247.6c2.4,0,3.9-1,3.9-3 c0-2-1.4-3.1-3.6-3.1h-5.9v6H138.3z"></path> <path class="st0" d="M158.6,231.4h14.9v3h-11.4v4.7h10.8v2.9h-10.8v5.6h11.9v3h-15.3V231.4z"></path> <path class="st0" d="M186.1,231.4h8.1c5.5,0,8.4,3.3,8.4,7.3c0,2.6-1.4,5-3.9,6.2l4.2,5.6h-4l-3.3-4.7c-0.5,0.1-1.1,0.1-1.7,0.1 h-4.3v4.5h-3.4V231.4z M194.4,243c2.7,0,4.7-2,4.7-4.3c0-2.5-1.9-4.4-4.6-4.4h-4.8v8.8H194.4z"></path> <path class="st0" d="M215.3,231.4h3.4v11.3c0,0,1.2-1.8,2.1-2.8l6.9-8.5h4l-7.1,9l7.8,10.2h-4l-5.9-7.8l-3.8,4.5v3.3h-3.4V231.4z "></path> <path class="st0" d="M244.3,231.4h3.4v7.7h9.3v-7.7h3.4v19.2h-3.4V242h-9.3v8.6h-3.4V231.4z"></path> <path class="st0" d="M281,231.4h3.3l8.6,19.2h-3.5l-1.5-3.3h-10.5l-1.5,3.3h-3.5L281,231.4z M286.7,244.5l-2.2-5 c-0.8-1.9-1.9-4.5-1.9-4.5s-1,2.5-1.9,4.5l-2.2,5H286.7z"></path> <path class="st0" d="M304.7,231.4h3l2.7,3.7c1.4,1.9,4.3,6.1,4.3,6.1s3-4.2,4.3-6.1l2.7-3.8h3v19.2h-3.4v-13.3 c0,0-0.6,1.1-1.8,2.9l-4.7,6.7l-4.8-6.8c-1.2-1.7-1.8-2.8-1.8-2.8v13.3h-3.4V231.4z"></path> <path class="st0" d="M337.4,248.1l1.3-2.6c1.6,1.3,3.5,2.2,6.4,2.2c2.1,0,4.1-1,4.1-2.7c0-1.7-2-2.3-3.9-2.7 c-3.5-0.8-7.2-2-7.2-5.8c0-3.6,3.4-5.4,6.9-5.4c2.7,0,4.9,0.8,6.8,2.1l-1.3,2.6c-1.7-1.1-3.5-1.6-5.5-1.6c-1.3,0-3.5,0.5-3.5,2.3 c0,1.5,1.7,2,4,2.6c3.6,0.9,7.2,2.2,7.2,5.9c0,4-4,5.8-7.7,5.8C340.9,250.8,338.7,249.3,337.4,248.1z"></path> <path class="st0" d="M370.9,234.3h-6.7v-3H381v3h-6.7v16.2h-3.4V234.3z"></path> <path class="st0" d="M393.2,231.4H408v3h-11.4v4.7h10.8v2.9h-10.8v5.6h11.9v3h-15.3V231.4z"></path> <path class="st0" d="M420.7,231.4h7.5c6.2,0,10.2,4.3,10.2,9.6s-3.9,9.6-10.2,9.6h-7.5V231.4z M428,247.6c4.1,0,6.7-2.8,6.7-6.6 s-2.7-6.6-6.7-6.6h-3.9v13.2H428z"></path> </g> <g> <circle class="st0" cx="105.8" cy="240.7" r="3.8"></circle> <circle class="st0" cx="461.1" cy="240.7" r="3.8"></circle> </g> </g> <g> <g> <path class="st0" d="M0,181.8c0-11.4,8.8-20.6,21.2-20.6c5.5,0,10.5,1.9,14.1,5.1l-5.3,5.8c-2.7-2.4-5.5-3-8.2-3 C14.4,169,9,174.7,9,181.8c0,7.2,5.2,13,12.3,13c3.7,0,7.1-1.4,9.6-4.2l5.4,6.1c-3.8,3.7-9,5.9-15.2,5.9 C8.8,202.6,0,193.3,0,181.8z"></path> <path class="st0" d="M49.3,181.8c0-11.5,8.9-20.7,21.3-20.7s21.3,9.2,21.3,20.7c0,11.5-8.9,20.8-21.3,20.8S49.3,193.3,49.3,181.8 z M82.8,181.8c0-7.1-5.1-12.8-12.1-12.8c-7,0-12.3,5.7-12.3,12.8c0,7.2,5.2,12.9,12.3,12.9C77.6,194.7,82.8,189,82.8,181.8z"></path> <path class="st0" d="M108.3,161.7h17.2c11.8,0,18,6.9,18,15.5s-6.2,15.5-18,15.5h-8.5v9.2h-8.7V161.7z M125.9,185.3 c5.1,0,8.5-3.6,8.5-8.1c0-4.5-3.3-8.1-8.4-8.1h-9v16.1H125.9z"></path> <path class="st0" d="M159.6,161.7h17.2c11.8,0,18,6.9,18,15.5s-6.2,15.5-18,15.5h-8.5v9.2h-8.7V161.7z M177.2,185.3 c5.1,0,8.5-3.6,8.5-8.1c0-4.5-3.3-8.1-8.4-8.1h-9v16.1H177.2z"></path> <path class="st0" d="M209.8,161.7h31.4v7.4h-22.7v8.2H240v7.4h-21.6v9.7H242v7.4h-32.3V161.7z"></path> <path class="st0" d="M257.3,161.7h17.2c11.8,0,18,6.9,18,15.6c0,5.1-2.7,10.1-7.6,12.8l8.4,11.8h-10l-6.2-9.4 c-1.2,0.2-2.2,0.3-3.4,0.3H266v9.1h-8.7V161.7z M274.8,185.3c5.1,0,8.6-3.7,8.6-8.1c0-4.6-3.5-8.2-8.6-8.2H266v16.2H274.8z"></path> <path class="st0" d="M324.9,161.7h8.7v15.7h17.2v-15.7h8.7v40.2h-8.7v-17h-17.2v17h-8.7V161.7z"></path> <path class="st0" d="M375.9,181.8c0-11.5,8.9-20.7,21.3-20.7c12.4,0,21.3,9.2,21.3,20.7c0,11.5-8.9,20.8-21.3,20.8 C384.7,202.6,375.9,193.3,375.9,181.8z M409.3,181.8c0-7.1-5.1-12.8-12.1-12.8s-12.3,5.7-12.3,12.8c0,7.2,5.2,12.9,12.3,12.9 C404.2,194.7,409.3,189,409.3,181.8z"></path> <path class="st0" d="M434.5,185.9v-24.2h8.7v23.7c0,6,3.4,9.2,8.7,9.2s8.7-3.2,8.7-9.2v-23.7h8.7v24.2c0,10.6-7.1,16.7-17.3,16.7 C441.6,202.6,434.5,196.5,434.5,185.9z"></path> <path class="st0" d="M485.2,197.1l3.2-6.7c3.2,2.4,7.1,4.4,13.2,4.4c3.3,0,7.4-1.5,7.4-4.7c0-3.1-3.6-3.9-7.1-4.8 c-7.5-1.7-15.2-4.3-15.2-12.6c0-7.7,7.2-11.6,14.9-11.6c6.1,0,10.7,1.6,14.7,4.3l-3.2,6.7c-3.2-2.1-7.4-3.2-11.5-3.2 c-2.1,0-6.1,0.8-6.1,3.8c0,2.6,2.9,3.5,6.9,4.5c7.1,1.7,15.7,4.3,15.7,13c0,8.7-8.4,12.5-16.5,12.5 C492,202.6,487.4,198.9,485.2,197.1z"></path> <path class="st0" d="M534.6,161.7h31.4v7.4h-22.7v8.2h21.6v7.4h-21.6v9.7h23.6v7.4h-32.3V161.7z"></path> </g> <path class="st0" d="M283.5,0c-38.4,0-69.6,31.2-69.6,69.6s31.2,69.6,69.6,69.6S353,108,353,69.6S321.8,0,283.5,0z M232.2,72.6 c-2.2-5-6.3-10.7-13.6-15.9c0.4-2.2,1-4.5,1.7-6.6c6.6,4.2,11.1,8.9,14.2,13.4C233.6,66.4,232.8,69.4,232.2,72.6z M221.5,46.7 c1.9-5.2,4.5-10.1,7.6-14.6c4,2.4,9.7,6.5,15.2,12.3c-3.2,4.5-6.1,9.5-8.3,15.1C232.6,55.1,227.9,50.7,221.5,46.7z M250.6,36.6 c-1.4,1.6-2.8,3.2-4.2,4.9c-5.6-5.7-11.2-9.7-15.3-12.3c1.3-1.7,2.7-3.4,4.2-5C239.5,27,245.1,31.1,250.6,36.6z M331.6,24.4 c1.5,1.6,2.9,3.2,4.2,5c-4.1,2.6-10,6.7-15.7,12.6c-1.3-1.7-2.7-3.4-4.2-5C321.6,31.3,327.3,27.1,331.6,24.4z M317.8,44.6 c-1.3,1.5-2.6,3.1-3.8,4.8c-1.3-1.8-2.7-3.6-4.2-5.2c1.2-1.6,2.5-3.1,3.8-4.6C315,41.1,316.4,42.8,317.8,44.6z M261.6,44.4 c9.2-9.6,19.2-14.8,21.8-16.1c2.7,1.3,12.7,6.5,21.8,16.1c-3.2,4.5-6,9.5-8.2,15.1c-3.1-4-7.1-8-12.6-11.7l-1-0.7l-1,0.7 c-5.5,3.7-9.6,7.7-12.6,11.7C267.6,53.9,264.8,48.8,261.6,44.4z M267.4,63c-1.9,3-3.3,6-4.2,8.8c-1.6-7.4-4.6-13.9-8.2-19.4 c1.3-1.9,2.7-3.7,4.2-5.4C262.5,51.7,265.3,57,267.4,63z M307.7,47c1.4,1.7,2.8,3.5,4.2,5.4c-3.6,5.5-6.6,12-8.2,19.4 c-0.9-2.8-2.3-5.7-4.2-8.8C301.6,57,304.5,51.7,307.7,47z M307.4,41.5c-11-11.4-23-16.7-23.3-16.8l-0.7-0.3l-0.7,0.3 c-0.2,0.1-12.2,5.4-23.3,16.8c-1.4-1.7-2.7-3.4-4.1-4.9c11.9-12,25-18.4,28.1-19.8c3.1,1.4,16,8,27.8,20.1 C309.9,38.4,308.7,39.9,307.4,41.5z M257.1,44.1c-1.4,1.6-2.8,3.3-4.2,5.2c-1.3-1.8-2.7-3.6-4.2-5.2c1.4-1.8,2.8-3.4,4.2-5 C254.4,40.7,255.8,42.4,257.1,44.1z M246.7,47c1.4,1.7,2.8,3.4,4.2,5.3c-3.6,5.6-6.6,12.1-8.2,19.6c-0.9-2.8-2.3-5.8-4.2-8.9 C240.5,57.1,243.4,51.7,246.7,47z M244.7,84.8c0-11.6,3.4-21.3,8.2-29.2c4.7,7.7,8.1,17.3,8.1,28.6v47.6 c-5.9-2.1-11.4-5.1-16.4-8.7V84.8z M264.6,84.2c0-3.4,0.6-9.7,4.3-16.7c1.4,5.1,2.2,10.7,2.2,16.7v50.3c-2.2-0.4-4.3-0.9-6.4-1.6 V84.2z M271.3,63.5c2.8-4.1,6.7-8.2,12.2-12.1c5.5,3.8,9.4,8,12.2,12.1c-0.9,2.9-1.7,6-2.2,9.2c-1.7-3.8-4.4-8-8.7-12l-1.2-1.1 l-1.2,1.1c-4,3.7-6.9,7.7-8.8,12C273,69.4,272.2,66.4,271.3,63.5z M295.9,84.2c0-6,0.8-11.6,2.2-16.7c3.7,7,4.3,13.3,4.3,16.7 v48.7c-2.1,0.6-4.3,1.2-6.4,1.6V84.2z M305.8,84.2c0-11.4,3.4-20.9,8.1-28.6c4.8,7.9,8.2,17.6,8.2,29.2v38.3 c-5,3.6-10.5,6.6-16.4,8.7V84.2z M316.1,52.4c1.2-1.7,2.5-3.4,3.8-4.9c3.3,4.8,6.2,10.1,8.4,16c-1.8,2.9-3.1,5.8-4,8.5 C322.7,64.5,319.7,58,316.1,52.4z M322.3,44.8c5.7-6,11.6-10.2,15.6-12.7c3.1,4.5,5.7,9.4,7.6,14.6c-6.6,4.1-11.4,8.7-14.8,13.3 C328.4,54.4,325.5,49.3,322.3,44.8z M346.6,50.1c0.7,2.2,1.2,4.4,1.7,6.7c-4.8,3.5-10.7,8.8-13.8,16.3c-0.6-3.2-1.4-6.2-2.3-9.1 C335.2,59.2,339.9,54.4,346.6,50.1z M329.1,21.8c-4.3,2.8-9.9,7-15.5,12.6c-13.9-14.2-29.2-21-29.5-21.1l-0.7-0.3l-0.7,0.3 c-0.3,0.1-15.9,6.6-29.8,20.8c-5.4-5.5-10.9-9.5-15.1-12.3c11.9-11.4,27.9-18.3,45.6-18.3C301.2,3.5,317.2,10.5,329.1,21.8z M218,60.6c10.3,7.9,12.8,16.7,13.2,21.7c0,0.8,0,1.7,0,2.5v25.1c-8.6-11.2-13.8-25.2-13.8-40.3C217.4,66.5,217.6,63.5,218,60.6z M234.8,114.2v-30c0-0.5,0-1.1-0.1-1.8c0.2-5.3,1-10.3,2.2-14.9c3.6,6.9,4.3,13.2,4.3,16.7v0.6v35.6 C238.9,118.5,236.8,116.4,234.8,114.2z M274.5,135.1V84.2c0-7.2,3-13.9,9-19.9c7.7,7.8,8.9,15.7,8.9,19.9v50.8 c-2.9,0.4-5.9,0.6-9,0.6C280.4,135.7,277.4,135.5,274.5,135.1z M325.7,120.4V84.8v-0.6c0-3.4,0.6-9.5,4-16.2 c1.5,5.5,2.4,11.4,2.4,17.8v28.4C330.1,116.4,328,118.5,325.7,120.4z M335.6,110.1V85.8v-1.6c0-11,7.1-18.9,13.3-23.6 c0.4,2.9,0.6,5.9,0.6,9C349.6,84.8,344.4,98.9,335.6,110.1z"></path> </g> </g> </svg> 
            <p style="position: absolute;right:0px;margin: 5px;border:1px solid #c0c0c0;line-height: 30px;top:0px;text-align: center;width: 120px;text-decoration: underline;" @click="logout">logout</p>
        </div>
        <div style="width: calc(100% - 20px);border:1px solid #c0c0c0;margin: 10px;float: left">
            <header><p style="text-align: center;font-weight: bold;font-size: 25px;margin: 10px;">Members</p></header>
            <div class="db-search">
            </div>
            <div class="customer-list list-header" @keyup="searchCustomers()">
                <div></div>
                <div>
                    <p>STATUS</p>
                    <input v-model="search.closed.value" />
                </div>
                <div>
                    <p>Name</p>
                    <input v-model="search.name.value" />                    
                </div>
                <div>
                    <p>Joined</p> 
                    <input v-model="search.joined.value"/>                    
                </div>  
                <div>
                    <p>Mobile</p>
                    <input v-model="search.phone.value" />  
                </div>                               
                <div>
                    <p>Email</p>
                    <input v-model="search.email.value" />  
                </div>
                <div>
                    <p class="ta-r mr-10">Visits</p>
                    <input v-model="search.landed.value"/>  
                </div>
                <div>
                    <p class="ta-r mr-10">Opens</p>
                    <input v-model="search.opens.value" />  
                </div>
                <div>
                    <p class="ta-r mr-10">Ads</p>
                    <input v-model="search.ads.value" />  
                </div>
                <div>
                    <p class="ta-r mr-10">Sent</p>
                    <input v-model="search.sent.value" />  
                </div>
                <div>
                    <p class="ta-r mr-10">Stamps</p> 
                    <input v-model="search.loyaltyQty.value" />                     
                </div>
                <div>
                    <p class="ta-r mr-10">Redeems</p>
                    <input v-model="search.redeemCount.value" />  
                </div> 
                <div>
                    <p class="ta-r mr-10">Last Act.</p>
                    <input v-model="search.active.value" />  
                </div> 
            </div>
            <div class="list-main">
                <div v-for="customer in customers">
                    <div class="customer-list">
                        <div :class="['gt',{ open: customer.open }]" @click="showCustomerDetail(customer)"></div>
                        <p @click="deleteCustomer(customer)">{{ customer.closed ? ( 'CLOSED '+ PAdate(customer.closed).time_date ) : 'ACTIVE' }}</p>
                        <p class="td-ulb" @click="editCustomer(customer)">{{ customer.name }}</p>
                        <p>{{ PAdate(customer.joined).time_date }}</p>
                        <p>{{ prettyPhone(customer.msisdn) }}</p>
                        <p>{{ customer.email }}</p>
                        <p class="ta-r mr-10">{{ customer.landed }}</p>
                        <p class="ta-r mr-10">{{ customer.opens }}</p>
                        <p class="ta-r mr-10">{{ customer.ads.filter(ad => !ad.dateRedeemed).length }}</p>
                        <p class="ta-r mr-10">{{ customer.sent }}</p>
                        <p class="ta-r mr-10">{{ customer.stampQty }}</p>
                        <p class="ta-r mr-10">{{ customer.redeemCount }}</p>
                        <p class="ta-r mr-10">{{ PAdate(customer.active).time_date }}</p>
                    </div>
                    <div v-if="customer.open" style="float: left;width: calc(100% - 20px);margin:9px;border:1px solid #c0c0c0;background-color: white;">
                        <div>
                            <div class="dashboard-summary">
                                <header><p>Live Coupons</p></header>
                                <div v-for="ad in (customer.ads || []).filter(ad => !ad.dateRedeemed)" :key="ad.coupon_id" class="live-coupons" style="width: 100%;float: left; display: grid;grid-template-columns: 150px 300px 220px 700px;">
                                    <p class="btn" @click="removeAd({ customer, ad })">remove</p>
                                    <p>{{ ad.field }}</p>
                                    <p>{{ PAdate(ad.date).time_date }}</p>
                                    <p></p>
                                </div>
                            </div>
                            <div class="dashboard-summary">
                                <header><p>Redeemed Coupons</p></header>
                                <div v-for="ad in (customer.redeemRewards || []).concat(customer.ads.filter(ad => ad.dateRedeemed)).reverse()" :key="ad.coupon_id" class="live-coupons" style="width: 100%;float: left; display: grid;grid-template-columns: 150px 300px 220px 700px;">
                                    <p class="btn" style="opacity: 0;" @click="removeRemoveAd({ customer, ad })"> remove</p>
                                    <p>{{ ad.title }}</p>
                                    <p>{{ PAdate(ad.now).time_date }}</p>
                                    <!-- <p>{{ !ad.staff ? getStaffName(ad.user_id,name => ad.staff = name) : ad.staff }}</p> -->
                                    <p>{{ ad.staff }}</p>
                                </div>
                            </div>
                            <div class="dashboard-summary">
                                <header><p>Loyalty Awards</p></header>
                                <div class="dashboard-summary-title" style="display:grid;grid-template-columns: 90px 200px 220px;grid-column-gap: 10px;font-weight: bold;">
                                    <p>Stamps</p>
                                    <p>Date</p>
                                    <p>Staff</p>
                                </div>
                                <div class="dashboard-summary-items">
                                    <div v-for="award in ( customer.loyaltyAwards || []).map(a => a).reverse()" style="display:grid;grid-template-columns: 90px 200px 220px;grid-column-gap: 10px;">
                                        <p class="ta-r" style="position: relative;left:-20px">{{ award.qty }}</p>
                                        <p>{{ PAdate(award.now).time_date }}</p>
                                        <p>{{ award.date.startsWith('2') ? getStaffName(award.user_id,name => { award.date = name }) : award.date }}</p>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
                <div class="btns">
                    <p class="btn" style="margin-top:10px;width: 140px;" @click="download('customers')">download</p>
                    <p class="btn" style="width: 140px;margin-top: 10px;" @click="sendSMS('customers')">send sms</p>
                    <p style="position:absolute;right:170px;margin-top: 16px;">Member Count {{ customerCount }}</p><p @click="showAll('customers')" style="margin:10px;width:140px" class="btn">{{ showAllcustomers ? 'show less' : 'show all' }}</p>
                </div>
            </div>
        </div>
        <div style="width: calc(100% - 20px);border:1px solid #c0c0c0;margin: 10px;float: left;">
            <header><p style="text-align: center;font-weight: bold;font-size: 25px;margin: 10px;">Staff</p></header>
            <div class="staff-list list-header" @keyup="searchUsers($event)">
                <div>  
                    <div></div>
                    <div>
                        <p>Status</p>
                        <input v-model="staff.status.value" />
                    </div>
                    <div>
                        <p>Name</p>
                        <input v-model="staff.name.value" />
                    </div>
                    <div>
                        <p>Number</p>
                        <input v-model="staff.staffNo.value" />
                    </div>
                    <div>
                        <p>Mobile</p>
                        <input v-model="staff.phone.value"  />
                    </div>
                    <div>
                        <p>Username</p>
                        <input v-model="staff.username.value"  />
                    </div>
                    <div>
                        <p>Created</p>
                        <input v-model="staff.created.value" />
                    </div>
                    <div>
                        <p>Verified</p>
                        <input v-model="staff.verified.value" />
                    </div>
                    <div>
                        <p>Stamps</p>
                        <input v-model="staff.stamps.value" />
                    </div>
                    <div>
                        <p>Redemptions</p>
                        <input v-model="staff.redeemCount.value"  />
                    </div>
                    <div>
                        <p>Last Active</p>
                        <input v-model="staff.lastActive.value" />
                    </div>
                </div>
            </div>
            <div class="list-main">
                <div v-for="staff in users" class="staff-list">
                    <div>     
                        <p :class="['gt',{ open: staff.open }]" @click="showStaffDetail(staff)"></p>
                        <p>ACTIVE</p>
                        <p class="td-ulb" :style="{ color: staff.suspend ? 'red' : 'blue' }" @click="editStaff(staff)">{{ staff.name }}</p>
                        <p>CH-{{ staff.staffNo }}</p>
                        <p>{{ staff.prettyPhone }}</p>
                        <p>{{ staff.username }}</p>
                        <p>{{ PAdate(staff.created).time_date }}</p>
                        <p>{{ staff.Verified ? PAdate(staff.Verified).time_date : 'Not Verified' }}</p>
                        <p>{{ staff.loyaltyQty }}</p>
                        <p>{{ staff.redeemReward }}</p>
                        <p class="ellip">{{ PAdate(staff.active).time_date }}</p>
                    </div>
                    <div v-if="staff.open" style="float: left;width: calc(100% - 20px);margin:9px;border:1px solid #c0c0c0;background-color: white;">
                        <div>
                            <div class="dashboard-summary">
                                <div class="dashboard-summary-title" style="display: grid;grid-template-columns: 220px 220px 400px">
                                    <p>Member</p>
                                    <p>Date</p>
                                    <p>Voucher</p>
                                </div>
                                <div class="dashboard-summary-items">
                                    <div v-for="voucher in (staff.redeemRewards || []).map(c => c).reverse()" style="display: grid;grid-template-columns: 220px 220px 400px">
                                        <p>{{ getCustomerName(voucher.customer_id,name => voucher.name = name) }}</p>
                                        <p>{{ PAdate(voucher.now).time_date }}</p>
                                        <p>{{ getAdTitle(voucher.ad_id,title => voucher.title = title) }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="dashboard-summary">
                                <div class="dashboard-summary-title" style="display: grid;grid-template-columns: 220px 220px 400px">
                                    <p>Member</p>
                                    <p>Date</p>
                                    <p>Stamps</p>
                                </div>
                                <div class="dashboard-summary-items">
                                    <div v-for="stamp in (staff.loyaltyAwards || []).map(c => c).reverse()" style="display: grid;grid-template-columns: 220px 220px 90px" >
                                        <p>{{ stamp.date.startsWith('2') ? getCustomerName(stamp.customer_id,name => stamp.date = name) : stamp.date }}</p>
                                        <p>{{ PAdate(stamp.now).time_date }}</p>
                                        <p class="ta-r" style="position: relative;left:-20px">{{ stamp.qty }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="btns">
                    <p class="btn" style="float: left;margin:10px;width: 140px;" @click="download('users')">download</p>
                    <p class="btn" style="float: left;margin:10px;width: 140px;" @click="addStaff()">new staff</p>
                    <p class="btn" style="margin:10px;width:140px" @click="showAll('users')">{{ showAllusers ? 'show less' : 'show all' }}</p>
                </div>
            </div>
        </div>
       <div style="width: calc(100% - 20px);border:1px solid #c0c0c0;float: left;margin: 10px">
            <header style="position: relative;"><p class="btn" style="width: 140px;margin: 0px 10px;position: absolute;" @click="makeNewCampaign()">new</p><p style="text-align: center;font-weight: bold;font-size: 25px;margin: 10px;">Campaigns</p></header>
           <div v-for="campaign in campaigns.filter(c => c.live)" :key="campaign._id" style="width: calc(100% - 20px);float: left;margin: 5px;border:1px solid #c0c0c0;padding:5px;" @mouseenter="enterCampaign(campaign)" >
                <div style="width:calc(100% - 20px;float:left;display:grid;grid-template-columns:320px 100px 100px 100px">
                    <p style="font-weight: bold;">{{ campaign.title }}</p>                
                    <p>Sent {{ campaign.qtySent }}</p>
                    <p>Opens {{ Object.keys(campaign.uniqueOpens || {}).length }}</p>
                    <p>Redeems {{ campaign.redeemCount }}</p>
                </div>
                <div v-if="!campaign.hide" v-for="page in campaign.pages" :key="page.code" style="float: left;width: calc(414px * 0.7 + 22px);height: 370px;">
                    <div style="position: relative;">
                        <div class="grab" @mousedown="downMove($event,campaign,page)" @mousemove="moveMove($event,campaign,page)" @mouseup="upMove($event,campaign,page)" ></div>
                        <Voucher :voucher="page" />
                        <div :style="{ backgroundColor: page.removed ? 'red' : '' }" class="remove-x" @click="remove($event,campaign,page)"></div>
                    </div>
                </div>
                <div class="btns" :style="{ marginTop: campaign.pages.length == 0 ? '320px' : '0px' }" >
                    <p class="btn del" @click="deleteCampaign(campaign)">delete</p>
                    <p class="btn" @click="editCampaign(campaign)" style="float: right;">edit</p>
                    <!-- <p class="btn" @click="campaign.hide = !campaign.hide" style="float: right;">{{ campaign.hide ? 'show' : 'hide' }}</p> -->
                    <p class="btn" @click="sendCampaign(campaign)" style="float:right">SEND</p>
                    
                </div>
           </div>
       </div>
       <div style="width: calc(100% - 20px);border:1px solid #c0c0c0;float:left;margin:10px;display:none">
           <header><p style="text-align: center;font-weight: bold;font-size: 25px;margin: 10px;">Vouchers</p></header>
           <div v-for="ad in ads" style="width: 140px;float:left;margin: 10px;">
                <img :src="ad.src" style="width: calc(100% - 10px);margin: 10px" />
                <p>Clicks {{ ad.clicks }}</p>
                <p>Redeemed {{ ad.redeemCount }}</p>
           </div>
       </div>
       <div v-if="removePage" class="v-alert" style="height: 538px;">
            <header><p>Remove Ad</p><div class="x" @click="removePage = false"></div></header>
            <Voucher style="position: absolute;z-index: -1;" :voucher="removePage" />
            <div class="label" style="margin-top: 380px;">
                <p style="width: calc(100% - 40px);float: right;margin-top: 5px;">Remove from All Members</p>
                <input type="checkbox" v-model="removeFromCustomers"/>
            </div>
            <div style="position: relative;z-index: 30;">
                <div class="label">
                    <p style="width: calc(100% - 40px);float: right;margin-top: 5px;">Remove from Campaign</p>
                    <input type="checkbox" v-model="removeFromCampaign"/>
                </div>                 
                <div class="btns">
                    <p class="btn red" @click="removePageNow(removePage)">remove</p>
                </div> 
            </div>          
       </div>
       <div v-if="campaign" class="v-alert" style="width: 600px;margin-left:-300px">
            <header><p>Campaign</p><div class="x" @click="campaign = false"></div></header>
            <div>
                <div class="label">
                    <p>Title</p>
                    <input v-model="campaign.title" />
                </div>
            </div>
            <div class="btns">
                <p class="btn del" @click="deleteCampaign(campaign)">delete</p>
                <p class="btn" @click="saveCampaign(campaign)">save</p>
            </div>
       </div>
       <div v-if="sendingCampaign" class="v-alert">
            <header><p>{{ sendBoxHeader }}</p><div class="x" @click="sendingCampaign = false"></div></header>
            <div>
                <p style="font-weight: bold;text-align: center;margin: 10px 0px">{{ sendingCampaign.title }}</p>
                <div class="label">
                    <p>Text Message</p>
                    <textarea v-model="sendingMessage" style="width: calc(100% - 15px);min-width: calc(100% - 15px);max-width: calc(100% - 15px);min-height: 100px;padding:5px;font-size: 18px;"></textarea>
                </div>
                <div class="label">
                    <p style="width: 100px;float: left;margin-top:5px">Send Text</p>
                    <input v-model="sendText" type="checkbox" style="float: left;" />
                </div>
            </div>
            <div style="float: left;width: calc(100% - 20px);margin: 10px">
                <p v-for="customer in selectedCustomers" style="display: grid;grid-template-columns: 1fr 1fr;line-height: 22px;"><span>{{ customer.name }}</span><span style="text-align: right;">{{ customer.prettyPhone }}</span></p>
            </div>
            <div class="btns">
                <p class="btn" @click="selectCustomers()">select</p>
                <p class="btn" @click="sendToCustomers(selectedCustomers)">send {{ selectedCustomers.length == 0 ? 'all' : selectedCustomers.length }}</p>
            </div>
       </div>
       <div v-if="newStaff" class="v-alert" style="width:600px;margin-left:-300px;top:50px;">
            <header><p>Edit Staff</p><div class="x" @click="newStaff = false"></div></header>
            <div>
                <div class="label">
                    <p>Name</p>
                    <input v-model="newStaff.name" />
                </div>
                <div class="label">
                    <p>Username</p>
                    <input v-model="newStaff.username" />
                </div>
                <div class="label">
                    <p>Email</p>
                    <input v-model="newStaff.email" />
                    <p class="btn" style="display: none;" @click="sendInvite('email',newStaff)">send invite</p>
                </div>
                <div class="label">
                    <p>Mobile</p>
                    <input v-model="newStaff.mobile" />
                    <p class="btn" style="display: none;" @click="sendInvite('sms',newStaff)">send invite</p>
                </div>

                <div class="label checkbox">
                    <p>Suspend</p>
                    <input v-model="newStaff.suspend" type="checkbox" />
                </div>
                <div class="label checkbox">
                    <p>Dashboard</p>
                    <input v-model="newStaff.dashboard" type="checkbox" />
                </div>
                <div class="label" style="display: none;">
                    <p>Notes</p>
                    <textarea v-model="newStaff.notes"></textarea>
                </div>
            </div>
            <div class="btns">
                <p class="btn del" @click="deleteStaff(newStaff)">delete</p><p @click="saveStaff(newStaff)" class="btn">save</p>
            </div>
       </div>
       <div v-if="offers" style="position: fixed;top:90px;left:100%" :class="['current-offers',{ 'show-open': showCurrent }]" @click="showCurrent = !showCurrent">
            <div style="width: 120px;background-color: rgba(0,255,0,1);height: 40px;border:1px solid black;position: absolute;">
                <div class="hide" style="float: left;background-color: rgba(0,255,0,1);"></div>
                <p style="float: left;line-height: 40px;font-size: 20px;">Offers</p>
            </div>
            <div class="offers-scroller" style="width: 313px;background-color: white;position: absolute;left:120px; ;padding:10px;height:calc(100vh - 90px);overflow-y: scroll;border: 1px solid black">
                <div v-for="page in offers.pages" :key="page.code" style="float: left;width: calc(414px * 0.7 + 22px);height: 370px;">
                    <div style="position: relative;">
                        <div class="grab" @mousedown="downMove($event,offers,page)" @mousemove="moveMove($event,offers,page)" @mouseup="upMove($event,offers,page)" ></div>
                        <Voucher :voucher="page" />
                        <div class="remove-x" @click="remove($event,offers,page)"></div>
                    </div>
                </div>
            </div>
       </div>
        <div v-if="csv" class="v-alert">
            <header><p>Download</p><div class="x" @click="csv = false"></div></header>
            <div style="float: left;margin: 20px;width:calc(100% - 40px)">
            <p style="text-align: center;">{{ fileName }}</p>
            <p style="text-align: center;margin-top:20px;width: 100%;"><a :download="fileName" :href="csv">download</a></p>
            </div>
        </div>
    </div>
</template>

<script>

import Alert from '@/utils/Alert.js'
import WebSoc from '@/utils/WebSoc.js'
import { formatDate, _date } from '@/utils/DateUtils.js'
import prettyPhone from '@/utils/prettyPhone.js'
import { mapActions } from 'vuex';
import editCustomer from '@/utils/EditCustomer.js'
import getStaffName from '@/utils/getStaffName.js';
import getCustomerName from '@/utils/getCustomerName.js';
import getAdTitle from '@/utils/getAdTitle.js'
import Voucher from '@/components/Voucher.vue';
import getCampaignPageCode from '@/utils/getCampaignPageCode.js';
import selectCustomers from '@/utils/SelectCustomers.js'

const PAdate = _date;

export default {
    name: 'dashboard',
    components: {
        Voucher
    },
    computed: {
        users () { return this.$store.state.DB.users },
        customers () { return this.$store.state.DB.customers },
        ads () { return this.$store.state.DB.ads },
        campaigns () { return this.$store.state.DB.campaigns },
        customerCount () { return this.$store.state.customerCount },
        client_id () { return this.$store.state.client_id },
        offers () { return this.$store.state.currentOffers },
        userCount () { return this.$store.state.userCount }
    },
    data () {
        return {
            showCurrent: false,
            PAdate,
            getStaffName,
            getCustomerName,
            getAdTitle,
            formatDate,
            prettyPhone,
            client: false,
            moving: false,
            removePage: false,
            removeFromCustomers: false,
            removeFromCampaign: false,
            sendingCampaign: false,
            sendingMessage: '',
            sendText: true,
            newStaff: false,
            selectedCustomers: [],
            showAllcustomers: false,
            showAllusers: false,
            campaign: false,
            search: {
                closed: { value: '', onsearch: (search) => {  } },
                name: { value: '' },
                joined: { value: '', type: 'date' },
                phone: { value: '' },
                email: { value: '' },
                landed: { value: '', type: 'num' },
                opens: { value: '', type: 'num' },
                ads: { value: '', onsearch: (search) => {  } },
                sent: { value: '', type: 'num' },
                loyaltyQty: { value: '', type: 'num' },
                redeemCount: { value: '', type: 'num' },
                active: { value: '', type: 'date' }
            },
            staff: {
                status: { value: '' },
                active: { value: ''  },
                name: { value: '' },
                staffNo: { value: '', onsearch: (search) => { var value = search.split('').filter(n => !isNaN(n)).join(''); return !isNaN(value) ? { $eq: parseInt(value) } : '' } },
                phone: { value: '' },
                username: { value: '' },
                created: { value: '' },
                verified: { value: '' },
                stamps: { value: '', type: 'num' },
                redeemCount: { value: '', type: 'num' },
                lastActive: { value: '', type: 'date' }
            },
            csv: false,
            fileName: '',
            sendBoxHeader: ''
        }
    },
    created () {
        console.log('this.staff',JSON.parse(JSON.stringify(this.staff)));
    },
    mounted () {
        //this.client_id = this.$route.params.id
        
        this.getDashboard(this.client_id);
        var interval = setInterval(() => {
            //this.$el && this.$el.parentElement ? (this.$forceUpdate(),console.log('forceUpdate') ) : clearInterval(interval);
        },5000);
    },
    methods: {
        sendSMS ( type ) {
            this.sendBoxHeader = 'Send SMS';
            this.sendingCampaign = type;
            this.selectedCustomers = [];
            this.sendText = true;            
        },
        download ( DB ) {
            WebSoc.SEND({ t: 'dashboardDownload', data: { DB, client_id: this.client_id }},csv => {
                DB = DB == 'users' ? 'staff' : 'customers';
                this.fileName = PAdate(Date.now()).time_date+'-'+DB+'.csv';
                this.csv = URL.createObjectURL(new Blob([csv.map(r => '"'+r.map(f => (f+'').replace(/"/g,'').replace(/,/g,'')).join('","')+'"').join('\n')],{ type: 'text/csv;charset=utf-8;' }));
                console.log(this.csv);
            });
        },
        showAll ( DB ) {
            var showAll = this['showAll'+DB] = !this['showAll'+DB];
            console.log('showAll',showAll);
            if ( DB == 'customers' ) {
                Object.keys(this.search).forEach(key => this.search[key].value = '');
                this.dbSearch({
                    limit: showAll ? 0 : 10,
                    db: this.client_id+'-customers',
                    search: this.search
                });
            }
            if ( DB == 'users' ) {
                this.dbSearch({
                    limit: showAll ? 0 : 10,
                    db: 'users',
                    search: { client_id: { value: this.client_id } }
                });
            }
        },
        addStaff () {
            this.initialStaff = false;
            this.newStaff = {
                suspend: false,
                dashboard: false,
                name: '',
                phone: '',
                email: '',
                client_id: this.client_id,
                username: '',
            }
        },
        editStaff ( user ) {
            user.dashboard = user.dashboard || false;
            this.initialStaff = JSON.stringify(user);
            this.newStaff = JSON.parse(this.initialStaff);
        },
        saveStaff ( user, cB ) {
            this.newStaff = false;
            if ( this.initialStaff ) {
                var initialStaff = JSON.parse(this.initialStaff);
                var update = ['email','mobile','name','username','notes','suspend','dashboard'].reduce((p,f) => {
                    if ( initialStaff[f] != user[f] ) { p[f] = user[f] };
                    return p;
                },{});
                if ( Object.keys(update).length == 0 && typeof cB == 'function' ) return cB(user);
                if ( Object.keys(update).length == 0 ) return this.newStaff = false; 
                return WebSoc.SEND({ t: 'saveClientStaff', data: { DB: 'users', _id: user._id, update }},resp => {
                    if ( resp.errorMessage ) { this.newStaff = user; return Alert.message(resp.errorMessage); }
                    typeof cB == 'function' && cB(user);
                })
            }
            WebSoc.SEND({ t: 'saveClientStaff', data: { DB: 'users', new: user }},resp => {
                console.log('saveClientStaff resp',resp);
                if ( resp.errorMessage ) { this.newStaff = user; return Alert.message(resp.errorMessage); }
                if ( resp.success ) return Alert.message('Added '+user.name);
            })
            
            
        },
        deleteStaff ( user ) {
            if ( !user._id ) return this.newStaff = false;
            Alert.yesno('Delete '+user.name+' ?',yes => {
                if ( !yes ) return;
                this.newStaff = false;
                WebSoc.SEND({ t: 'deleteClientStaff', data: { _id: user._id }},resp => {

                })
            })
            
        },
        sendInvite ( type, user ) {
            var that = this;
            this.newStaff = false;

            if ( !user._id ) return this.saveStaff( user ,user => {
                sendInvite(user);
            });
            
            sendInvite(user)

            function sendInvite(user) {
                
                if ( type == 'sms' && !user.msisdn ) {
                    this.newStaff = user;
                    return Alert.message('Please provide a valid mobile number for '+user.name+'.');
                }
                WebSoc.SEND({ t: 'sendStaffInvite', data: { type, user }},resp => {

                })
            }
        },
        sendToCustomers ( customers ) {
            if ( this.sendText && !this.sendingMessage ) return Alert.message('You must provide a Message');
            var campaign = this.sendingCampaign;
            if ( customers.length == 0 ) {
                return Alert.yesno('Send to '+this.customerCount+' members?',yes => {
                    WebSoc.SEND('sendCampaign',{ _id: campaign._id, client_id: campaign.client_id, customers: customers, message: this.sendingMessage, sendText: this.sendText },resp => {
                        console.log('sendCampaign',resp);
                    })
                })
            }
            this.selectedCustomers = [];
            this.sendingCampaign = false;
            WebSoc.SEND('sendCampaign',{ _id: campaign._id, client_id: campaign.client_id, customers: customers, message: this.sendingMessage,sendText: this.sendText },resp => {
                console.log('sendCampaign',resp);
            })
            
        },
        sendCampaign ( campaign ) {
            this.sendBoxHeader = 'Send Campaign';
            this.sendingCampaign = campaign;
            this.selectedCustomers = [];
            this.sendText = true;
        },
        selectCustomers() {
            selectCustomers({ client_id: this.client_id, current: this.selectedCustomers },customers => {
                this.selectedCustomers = customers;
            })
        },
        remove ( e, campaign, page ) {

            if ( page.removed && e.shiftKey ) {
                page.removed = false;
                e.preventDefault();
                e.stopPropogation();
                return  this.updateCampaign({
                            campaign,
                            unRemovePage: page
                        });;

            }

            if ( page.removed ) {
                return Alert.yesno('Remove PERMINATELY from Campaign?',yes => {
                    if ( !yes ) return;
                    campaign.pages = campaign.pages.filter(P => P != page)
                    this.updateCampaign({
                        permRemovePage: page,
                        campaign
                    });
                })
            }

            this.removeFromCustomers = false;
            this.removeFromCampaign = true;
            this.removeCampaign = campaign;
            this.removePage = page;
        },
        removePageNow ( page ) {
            var { removeFromCampaign, removeFromCustomers } = this;
            page.removed = true;
            //removeFromCampaign && ( this.removeCampaign.pages = this.removeCampaign.pages.filter(P => P != page) );
            this.removePage = false;
            this.updateCampaign({
                campaign: this.removeCampaign,
                removePage: page,
                removeFromCampaign,
                removeFromCustomers
            });;
        },
        enterCampaign ( toCampaign ) {
            var moving = this.moving;
            if ( !moving ) return;
            var sourceCampaign = moving.campaign;
            var sourcePage = moving.page;
            var newPage = JSON.parse(JSON.stringify(sourcePage));
                newPage.campaign_id = toCampaign._id;
            if ( sourceCampaign != toCampaign ) {
                this.moving = false;
                getCampaignPageCode(toCampaign,code => {
                    newPage.code = code;
                    toCampaign.pages.push(newPage);
                    this.updateCampaign({
                        campaign: toCampaign,
                        addPage: newPage
                    });
                });
            } 
        },
        downMove ( e, campaign, page ) {
                e.preventDefault();
            var src = e.target;
            var ele = src.parentElement;
            var pos = ele.getBoundingClientRect();
            var box = ele.parentElement;
            var container = box.parentElement;
            var parentPos = container.getBoundingClientRect();
            var boxPos = box.getBoundingClientRect();
                ele = ele.cloneNode(true);
                ele.classList.add('ad-mover');
                ele.style.position = 'Fixed';
                ele.style.top = pos.top+'px'
                ele.style.left = pos.left+'px';
                ele.style.opacity = 0.8;
                this.moving = { offers: container.classList.contains('offers-scroller'), ele: ele, startX: e.clientX, startY: e.clientY, x: e.clientX, y: e.clientY, left: pos.left, top: pos.top, width: boxPos.width + 20, height: boxPos.height, campaign: campaign, page: page, row: parseInt(parentPos.width / (boxPos.width + 20)), currentPOS: campaign.pages.indexOf(page), parentTop: parentPos.top, parentWidth: parentPos.width, parentHeight: parentPos.height }
                //this.moving.offers && ( this.moving.height = this.moving.height / 1.3);
                document.body.appendChild(ele);
                ele.addEventListener('mousemove',(e) => this.moveMove(e,campaign,page)); 
                ele.addEventListener('mouseleave',(e) => this.upMove(e,campaign,page)); 
                ele.addEventListener('mouseup',(e) => this.upMove(e,campaign,page));  
        },
        upMove ( e, campaign, page ) {
            var moving = this.moving;
        
            if ( moving ) {
                var ele = moving.ele;
                ele && document.body.removeChild(ele);
                setTimeout(() => {
                    moving.ele == this.moving.ele && ( this.moving = false );
                },1000)
            }
        },
        moveMove ( e, campaign, page ) {
            if ( !this.moving ) return;
            e.preventDefault();
            var moving  = this.moving, that = this;
            var ele     = moving.ele;
            var x = e.clientX - moving.x;
            var y = e.clientY - moving.y;
                ele.style.left = moving.left + x + 'px';
                ele.style.top = moving.top + y + 'px';
                if ( !e.shiftKey ) return;
                if ( e.clientY - moving.parentTop < 0 ) return;
                if ( ( moving.parentTop + moving.parentHeight ) - e.clientY < 0 ) return;
                if ( moving.startX - e.clientX > ( moving.width / 2 ) )   moveLeft(-1)
                if ( moving.startX - e.clientX < - ( moving.width / 2 ) ) moveLeft(+1)
                if ( moving.startY - e.clientY > ( moving.height / 2 ) )   moveTop(-1);
                if ( moving.startY - e.clientY < - ( moving.height / 2 ) ) moveTop(+1)
                function moveLeft(dir) {
                    campaign.pages.splice(campaign.pages.findIndex(p => p.code == page.code),1);
                    campaign.pages.splice(moving.currentPOS += dir,0,page);
                    moving.startX = e.clientX + ( ( moving.width / 2 ) * dir );
                    that.updatePages({
                        campaign,
                        pages: campaign.pages
                    });
                }

                function moveTop(dir) {
                    campaign.pages.splice(campaign.pages.findIndex(p => p.code == page.code),1);
                    if ( moving.offers ) {
                        campaign.pages.splice(moving.currentPOS += dir,0,page);
                    } else {
                        campaign.pages.splice(moving.currentPOS += ( ( moving.row + 1 ) * dir ),0,page);
                    }
                    moving.startY = e.clientY + ( ( moving.height / 2 ) * dir );
                    that.updatePages({
                        campaign,
                        pages: campaign.pages
                    });
                }

        },
        removeAd({ customer, ad }) {
            console.log('removeAd customer',customer);
            console.log('remvedAd ad',ad);
            Alert.yesno('Remove Ad ?',yes => {
                if ( !yes ) return;
                WebSoc.SEND('removeAd',{ client_id: this.client_id, coupon_id: ad.coupon_id, customer_id: customer._id, ad },() => {
                    console.log('removeAd resp',resp);
                })
            })
        },
        removeRemoveAd({ customer, ad }) {
            Alert.yesno('Remove Ad ?',yes => {
                if ( !yes ) return;
                WebSoc.SEND('removeRemoveAd',{ redeemedAds: true, client_id: this.client_id, coupon_id: ad.coupon_id, customer_id: customer._id, ad },() => {
                    console.log('removeRemoveAd resp',resp);
                })
            })            
        },
        searchCustomers () {
            this.dbSearch({
                db: this.client_id+'-customers',
                search: this.search
            });
        },
        searchUsers() {
            this.staff.client_id = { value: this.client_id }
            this.dbSearch({
                db: 'users',
                search: this.staff
            });
        },
        editCustomer ( customer ) {
            editCustomer({
                client_id: this.client_id,
                customer_id: customer._id
            },() => {
                console.log('done');
            });
        },
        deleteCustomer ( customer ) {
            Alert.yesno('Delete '+customer.name+'?',yes => {
                if ( !yes ) return;
                WebSoc.SEND({ t: 'deleteCustomer', data: { customer_id: customer._id, client_id: customer.client_id } },() => {
                    console.log('resp',resp);
                    //this.customers = this.customers.filter(c => c != customer);
                })
            })
        },
        deleteCampaign ( campaign ) {
            Alert.yesno('Delete Campaign<br>'+campaign.title+'?',yes => {
                if ( !yes ) return;
                //this.campaigns.splice(this.campaigns.indexOf(campaign),1);
                this.updateCampaign({
                    deleteCampaign: campaign
                });
                this.campaign = false;
            });
        },
        saveCampaign ( campaign ) {
            this.campaign = false;
            this.updateCampaign({
                saveCampaign: campaign
            });
            setTimeout(() => this.$forceUpdate(),1000);
        },
        editCampaign( campaign ) {
            this.campaign = campaign;
        },
        makeNewCampaign () {
            console.log('newCampaign');
            var now = Date.now();
            this.campaign = {
                hide: false,
                id: '',
                iss: 0,
                title: '',
                client: '',
                client_id: this.client_id,
                about: '',
                created: now,
                u_created: PAdate(now).time_date,
                backgroundColor: '#ffffff',
                buttonColor: '#ffffff',
                buttonFontColor: '#ffffff',
                fontColor: '#ffffff',
                styleSurvey: false,
                staffSurvey: false,
                parent_id: false,
                child_ids: [],
                fontStyle: '',
                fontLink: '',
                fontName: '',
                pageLogo: '',
                clicks: 0,
                qtySent: 0,
                unique: {},
                user: '',
                pages: [],
                ham: [],
                issues: []
            }
        },
        exit () {
            this.$back();
        },
        show ( type ) {
            console.log('show',type);
        },
        ...mapActions([
            'getDashboard',
            'dbSearch',
            'showCustomerDetail',
            'showStaffDetail',
            'removeCampaign',
            'updatePages',
            'updateCampaign',
            'logout'
        ])
    }
}

</script>

<style lang="scss">
.st0{fill:#B77113;}
.current-offers {
    transform: translateX(-120px);
    transition: transform 0.3s;    
    &.show-open {
        transform: translateX(-455px);
    }
    .offers-scroller {
        > div:last-child { margin-bottom: 50px; }
    }
    
}    
.show-open {
    .hide {
        transform: rotate(0deg);
    }
}    
.hide {
    position: relative;
    width: 40px;
    height: 40px;
    background-color: whitesmoke;
    transform: rotate(180deg);
    &:before,&:after {
        content: '';
        width: 2px;
        height: 15px;
        background-color: black;
        position: absolute;
        top: 19px;
        left: 20px;
        transform: rotate(30deg);
    }
    &:after {
        top: 6px;
        transform: rotate(-30deg);
    }  
}      
.v-alert {
    .label {
        textarea { width: calc(100% - 20px); min-width: calc(100% - 20px); max-width: calc(100% - 20px); min-height: 100px; font-size: 16px; padding: 5px }
        &.with-btn {
            input { 
                width: calc(100% - 150px); 
            }
            p.btn { margin: 1px 10px 0px 0px; float: right;  }
        }
        &.checkbox {
            p { margin-top: 20px; margin-bottom: 3px; width: 200px; width: calc(100% - 200px ); text-align: left; }
            input[type=checkbox] {  }
        }
    }
}    
.ad-mover {
    .remove-x { display: none; }
}    
.remove-x {
    width: 30px;
    height: 30px;
    background-color: rgba(220,220,220,1);
    border-radius: 50%;
    border: 2px solid black;
    position: absolute;
    top: 325px;
    right: 0px;
    padding: 10px;
    &:before,&:after {
        content: '';
        width: 30px;
        height: 1px;
        background-color: black;
        position: absolute;
        top: 25px;
        left: 11px;
        transform: rotate(-45deg);
    }
    &:after {
        transform: rotate(45deg);
    }
}    
.grab { 
    width: 30px;
    height: 30px;
    background-image: url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwJyB3aWR0aD0nMzAnIGZpbGw9IiMwMDAwMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48Zz48cGF0aCBkPSJNMTQuMDU4LDIxLjEyOUg5LjEyOWMtMi40ODEsMC00LjUtMi4wMTktNC41LTQuNXYtMS43OTNsLTEuNTk1LTEuNTk1Yy0wLjg4NC0wLjg4NC0wLjg4NC0yLjMyMywwLTMuMjA3ICAgIGMwLjMzNi0wLjMzNywwLjc2LTAuNTU1LDEuMjIxLTAuNjMyQzMuNjYzLDguNTIxLDMuNzU2LDcuMzEzLDQuNTM0LDYuNTM0QzUuMjM4LDUuODMsNi4yOTMsNS42ODgsNy4xMzksNi4xMDMgICAgQzcuMTk5LDUuNjIsNy40MTUsNS4xNTQsNy43ODQsNC43ODRjMC44NTctMC44NTgsMi4yMzctMC44ODMsMy4xMjYtMC4wNzdjMC4wODQtMC40NDEsMC4yOTgtMC44NDgsMC42MjQtMS4xNzMgICAgYzAuODg0LTAuODg1LDIuMzIzLTAuODg1LDMuMjA3LDBsNC45NzQsNC45NzRjMS4yMzQsMS4yMzQsMS45MTQsMi44NzUsMS45MTQsNC42MjFzLTAuNjgsMy4zODctMS45MTQsNC42MjFsLTEuNzY4LDEuNzY4ICAgIEMxNi45MDgsMjAuNTU3LDE1LjUyNywyMS4xMjksMTQuMDU4LDIxLjEyOXogTTUuNjI5LDE1LjgzNnYwLjc5M2MwLDEuOTMsMS41NywzLjUsMy41LDMuNWg0LjkyOWMxLjIwMiwwLDIuMzMyLTAuNDY4LDMuMTgyLTEuMzE4ICAgIGwxLjc2OC0xLjc2OGMxLjA0NS0xLjA0NSwxLjYyMS0yLjQzNiwxLjYyMS0zLjkxNHMtMC41NzYtMi44NjktMS42MjEtMy45MTRsLTQuOTc0LTQuOTc0Yy0wLjQ3OS0wLjQ3OS0xLjMxMy0wLjQ3OS0xLjc5MywwICAgIGMtMC40OTQsMC40OTQtMC40OTQsMS4yOTksMCwxLjc5M2wwLjI0MSwwLjI0MWMwLjA5OCwwLjA5OCwwLjE0NiwwLjIyNiwwLjE0NiwwLjM1NHMtMC4wNDksMC4yNTYtMC4xNDYsMC4zNTQgICAgYy0wLjE5NSwwLjE5NS0wLjUxMiwwLjE5NS0wLjcwNywwbC0xLjQ5MS0xLjQ5MWMtMC40OTQtMC40OTQtMS4yOTktMC40OTQtMS43OTMsMEM4LjI1Miw1LjczMSw4LjEyLDYuMDUsOC4xMiw2LjM4OCAgICBzMC4xMzIsMC42NTcsMC4zNzEsMC44OTZsMS40OTEsMS40OTFjMC4wOTgsMC4wOTgsMC4xNDYsMC4yMjYsMC4xNDYsMC4zNTRTMTAuMDgsOS4zODUsOS45ODIsOS40ODMgICAgYy0wLjE5NSwwLjE5NS0wLjUxMiwwLjE5NS0wLjcwNywwTDcuMDM0LDcuMjQxYy0wLjQ5NC0wLjQ5NC0xLjI5OS0wLjQ5NC0xLjc5Mywwcy0wLjQ5NCwxLjI5OSwwLDEuNzkzbDIuMjQxLDIuMjQxICAgIGMwLjA5OCwwLjA5OCwwLjE0NiwwLjIyNiwwLjE0NiwwLjM1NHMtMC4wNDksMC4yNTYtMC4xNDYsMC4zNTRjLTAuMTk1LDAuMTk1LTAuNTEyLDAuMTk1LTAuNzA3LDBsLTEuMjQxLTEuMjQxICAgIGMtMC40NzktMC40NzktMS4zMTMtMC40NzktMS43OTMsMEMzLjUwMiwxMC45ODEsMy4zNywxMS4zLDMuMzcsMTEuNjM4czAuMTMyLDAuNjU3LDAuMzcxLDAuODk2bDMuNzQxLDMuNzQxIGMwLjA5OCwwLjA5OCwwLjE0NiwwLjIyNiwwLjE0NiwwLjM1NHMtMC4wNDksMC4yNTYtMC4xNDYsMC4zNTRjLTAuMTk1LDAuMTk1LTAuNTEyLDAuMTk1LTAuNzA3LDBMNS42MjksMTUuODM2eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+');
    background-color: rgba(220,220,220,1);
    padding: 10px;
    background-repeat: no-repeat;
    background-position: 10px 8px;
    border-radius: 50%;
    border: 2px solid black;
    position: absolute;
    z-index: 10;
}    
.dashboard-summary {
    width: calc(100% - 20px);
    float: left;
    margin: 9px;
    border: 1px solid #c0c0c0;
    > header {
        border-bottom: 1px solid #c0c0c0;
        p { text-align: center; font-size: 20px; line-height: 30px; }
    }
    .dashboard-summary-title {
        padding: 10px;
        float: left;
        width: 100%;
        border-bottom: 1px solid #c0c0c0;
        > p { font-weight: bold; }
    }
    .dashboard-summary-items {
        float: left;
        line-height: 25px;
        width: 100%;
        > div > p { position: relative; left: 10px; }
        > div:nth-child(even) { background-color: rgba(100,100,100,0.2); }
    }
    .live-coupons {
        &:nth-child(odd) { background-color: rgba(100,100,100,0.2); }
        p:nth-child(2),p:nth-child(3),p:nth-child(4) { line-height: 40px; }
    }
}    
.gt {
    width: 20px;
    height: 20px;
    position: relative;
    transform: rotate(0deg);
    transition: 0.3s transform;
    &.open {
        transform: rotate(90deg);
    }
    &:before,&:after {
        content: '';
        width: 12px;
        height: 2px;
        top: 2px;
        left: 10px;
        background-color: rgba(100,100,100,1);
        position: absolute;
        transform: rotate(45deg);
        transform-origin: 0px 0px;
    }
    &:after {
        top: 18px;
        left: 8px;
        transform: rotate(-45deg);  
    }
}    
.dashboard {
    .list-main {
        border-top: 1px solid #c0c0c0;
        float: left;
        width: 100%;
        > div:nth-child(even) > div { background-color: rgba(100,100,100,0.2); }
    }
    .customer-list {
        width: calc(100% - 10px);
        float: left;
        padding: 5px;
        display: grid;
        grid-template-columns: 40px minmax(120px,260px) minmax(120px,300px) minmax(120px,300px) minmax(200px,1fr) minmax(120px,1fr) minmax(75px,120px) minmax(75px,120px) minmax(75px,120px) minmax(75px,120px) minmax(75px,120px) minmax(75px,120px) minmax(220px,250px);
        > div {
            input { width: calc(100% - 25px); margin-right:0px; padding: 5px; font-size: 16px; }
            .ta-r + input { position: relative; left: 13px; }
        }
        &.list-header {
            p { font-weight: bold; }
        }
        > p {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 14px;
        }
    }
    .staff-list {
        &.list-header {
            > div {
                p {
                    font-weight: bold;
                }
                input { 
                    width: calc(100% - 25px); 
                    margin-right: 0px;
                    padding: 5px;
                    font-size: 16px; 
                }
            }
        }
        > div:nth-child(1) {
            width: calc(100% - 10px);
            float: left;
            padding: 5px;
            display: grid;
            grid-template-columns: 40px 200px 200px 100px 200px 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        }
        > div > p {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 14px;
        }
    }
}
</style>