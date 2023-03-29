import { Component, Input, Output ,EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'lib-ngx-everything-uppercase',
  templateUrl: './ngx-everything-uppercase.component.html',
  styleUrls: ['./ngx-everything-uppercase.component.scss']  
 
})
export class NgxEverythingUppercaseComponent implements OnInit {
  @Input() data: any = Object; 
  
  // @Input() promocode: string = '';

  @Output() onAcceptPlan = new EventEmitter<Object>();  
  constructor() { }  


  
  public promocode: string = '';
  public plans: any = [];
  public user: any = {};
  public discountCode: boolean = false;
  public couponMsgVisible: boolean = false;
  public discountPrice: any; 
  public finalprice: any;
  public recurringCharge: any;
  public loading: boolean = false;




  // constructor(private route: ActivatedRoute, private priceService: PriceService) {
  //   this.route.queryParams.subscribe(params => {
  //     // console.log("data is",params)
  //     if (params['promocode']) {
  //       // console.log('promocode is',params['promocode'])
  //       this.promocode = params['promocode'];
  //       localStorage.setItem("promocode", this['promocode']);
  //       this.discountCode = true;
  //       this.couponMsgVisible = true;
  //     } else {
  //       // console.log("else run")
  //       localStorage.removeItem("promocode");
  //       this.discountCode = false;
  //     }
  //   })
  // }

  ngOnInit() {
    this.plans = this.data.plans;
    // console.log(this.plans)
    this.user = this.data.user;
    
  }


  

  // checkCouponCode(plan: any) {
  //   let finalprice = plan.price;
  //   let code = localStorage.getItem("promocode") || '';
  //   if (code) {
  //     if (plan.discounts && plan.discounts.length > 0) {
  //       let findCoupon = plan.discounts.find((e: any) => e.code.toLocaleLowerCase() == code.toLocaleLowerCase());
  //       if (findCoupon) {
  //         let discount = 0;
  //         if (findCoupon.type == 'amount') {
  //           discount = findCoupon.value;
  //         } else if (findCoupon.type == 'percentage') {
  //           discount = (findCoupon.value * plan.price) / 100;
  //         }
  //         finalprice = plan.price - discount;
  //       }
  //     }
  //   }
  //   return finalprice;
  // }

  acceptPlan(plan: any) {
    // plan['finalPrice'] = this.checkCouponCode(plan);
    // console.log("price is",plan.price)
    plan['finalPrice'] = plan.price

    plan['trial_days'] = this.user.trial && this.user.trial.days ? this.user.trial.days : 0;
    plan['test'] = this.user && this.user.email && this.user.email.includes("webrexstudio.com") ? true : false;
    plan['return_url'] = window.location.origin + "/app/activeplan";
    this.loading = true;
    this.onAcceptPlan.emit(plan);
    // this.priceService.acceptPlan(plan).subscribe((res) => {
    //   console.log("active plan is",res)
    //   this.loading = false;
    // },  
    // err => {
    //   console.log("error is",err)
    //   this.loading = false;
    // }
    // );
    // console.log(this.user)
  
  }

  deactivePlan(plan: any) {
    console.log("deactive plan - - ",plan);
  }

  // deactivePlan(plan: any){
    // let deletePlan =this.plans.find((p:any)=>{ return p.id===plan.id})
    // console.log("deleteplan is",deletePlan)
    // if(deletePlan!==" "){
    //   this.priceService.deactivePlan(plan).subscribe((res)=>{ console.log("delete data",res)})
    // }else{
    //   console.log("yet not active plan")
    // }
  // }


//   acceptPricing(value:any)
// {
//   console.warn("onaccept vaLUE IS:",value)

// }


}
