colorChange();

function colorChange() {
	setTimeout(function(){ $("td").css("color", "#100") }, 50);
	setTimeout(function(){ $("td").css("color", "#300") }, 100);
	setTimeout(function(){ $("td").css("color", "#500") }, 150);
	setTimeout(function(){ $("td").css("color", "#700") }, 200);
	setTimeout(function(){ $("td").css("color", "#900") }, 250);
	setTimeout(function(){ $("td").css("color", "#b00") }, 300);
	setTimeout(function(){ $("td").css("color", "#d00") }, 350);
	setTimeout(function(){ $("td").css("color", "#f00") }, 400);
	setTimeout(function(){ $("td").css("color", "#f11") }, 450);
	setTimeout(function(){ $("td").css("color", "#f33") }, 500);
	setTimeout(function(){ $("td").css("color", "#f55") }, 550);
	setTimeout(function(){ $("td").css("color", "#f77") }, 600);
	setTimeout(function(){ $("td").css("color", "#f99") }, 650);
	setTimeout(function(){ $("td").css("color", "#fbb") }, 700);
	setTimeout(function(){ $("td").css("color", "#fdd") }, 750);
	setTimeout(function(){ $("td").css("color", "#fff") }, 800);
	setTimeout(function(){ $("td").css("color", "#fff") }, 850);
	setTimeout(function(){ $("td").css("color", "#fdd") }, 900);
	setTimeout(function(){ $("td").css("color", "#fbb") }, 950);
	setTimeout(function(){ $("td").css("color", "#f99") }, 1000);
	setTimeout(function(){ $("td").css("color", "#f77") }, 1050);
	setTimeout(function(){ $("td").css("color", "#f55") }, 1100);
	setTimeout(function(){ $("td").css("color", "#f33") }, 1150);
	setTimeout(function(){ $("td").css("color", "#f11") }, 1200);
	setTimeout(function(){ $("td").css("color", "#f00") }, 1250);
	setTimeout(function(){ $("td").css("color", "#d00") }, 1300);
	setTimeout(function(){ $("td").css("color", "#b00") }, 1350);
	setTimeout(function(){ $("td").css("color", "#900") }, 1400);
	setTimeout(function(){ $("td").css("color", "#700") }, 1450);
	setTimeout(function(){ $("td").css("color", "#500") }, 1500);
	setTimeout(function(){ $("td").css("color", "#300") }, 1550);
	setTimeout(function(){ $("td").css("color", "#100") }, 1600);
	setTimeout(function(){ colorChange(); }, 1650);
}