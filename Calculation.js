function myFunction()
{
	var unit=document.getElementById('units').value;
	var range1=7.85;
	var range2=7.85;
	var range3=10;
	var range4=27.75;
	var range5=6;
	
	var amount =0;
	
	if(unit<30)
	{
	amount = range1*unit;
	}
	if(unit>=30 && unit<60)
	{
	amount= (30*range1) + (range2*(unit-30));
	}
	
	if(unit>=60 && unit<90)
	{
	amount = (30*range1)+(30*range2) +(range3*(unit-30));
	}
	if(unit>=90 && unit <120)
	{
	amount = (30*range1)+(30*range2) +(30*range3)+ (range4*(unit-30));
	}
	
	if(unit <180)
	{
	amount= (30*range1)+(30*range2) +(30*range3)+ (30*range4)+(range5*(unit-30));
	}
	var txtResult=document.getElementById('totalBill');
	txtResult.innerHTML="<h3> Your Bill Amount is ="+ amount+ "  Rs </h3>";
	
}