let johnBills = {
    bills: [124, 48, 268, 180, 42],
    tipCalc: function() {
        this.tips = [];
        this.totalBill = [];
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                var tip = this.bills[i] * 0.2;
                var total = this.bills[i] + tip;
                // this.tips.push(tip);
                // this.totalBill.push(total);
            } else if (this.bills[i] >=  50 && this.bills[i] <= 200) {
                var tip = this.bills[i] * 0.15;
                var total = this.bills[i] + tip;
                // this.tips.push(tip);
                // this.totalBill.push(total);
            } else {
                var tip = this.bills[i] * 0.10;
                var total = this.bills[i] + tip;
                // this.tips.push(tip);
                // this.totalBill.push(total);
            }
            this.tips[i] = tip;
            this.totalBill[i] = total;
        }
        return [this.tips, this.totalBill];
    }
};

let markBills = {
    bills: [77, 475, 110, 45],
    tipCalc: function() {
        this.tips = [];
        this.totalBill = [];
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 100) {
                var tip = this.bills[i] * 0.2;
                var total = this.bills[i] + tip;
                // this.tips.push(tip);
                // this.totalBill.push(total);
            } else if (this.bills[i] >= 100 && this.bills[i] <= 300) {
                var tip = this.bills[i] * 0.10;
                var total = this.bills[i] + tip;
                // this.tips.push(tip);
                // this.totalBill.push(total);
            } else {
                var tip = this.bills[i] * 0.25;
                var total = this.bills[i] + tip;
                // this.tips.push(tip);
                // this.totalBill.push(total);
            }
            this.tips[i] = tip;
            this.totalBill[i] = total;
        }
        return [this.tips, this.totalBill];
    }
};

johnBills.tipCalc();
markBills.tipCalc();
console.log(johnBills, markBills);


function findAvgTip(arrayOfTips) {
     var sum = 0;
    for (var i = 0; i < arrayOfTips.length; i++) {
        sum = sum + arrayOfTips[i];
        var average = sum / arrayOfTips.length;
    }
    return average;
}

johnBills.averageTip = findAvgTip(johnBills.tips);
// let johnAvgTip = findAvgTip(johnBills.tipCalc()[0]);
// let johnAvgTip = findAvgTip(johnBills.tips);

markBills.averageTip = findAvgTip(markBills.tips);
// let markAvgTip = findAvgTip(markBills.tipCalc()[0]);
// let johnAvgTip = findAvgTip(markBills.tips);

if (johnBills.averageTip > markBills.averageTip) {
    console.log("John paid more in tips: " + johnBills.averageTip);
} else if (markBills.averageTip > johnBills.averageTip) {
    console.log("Mark paid more in tips: " + markBills.averageTip);
} else {
    console.log("ya'll paid the same!");
}
