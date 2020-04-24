  Chart.defaults.global.animation.duration=3000;
  Chart.defaults.global.legend.display=false;

var medalBarCtx = document.getElementById("medalBar").getContext('2d');

	var medalBar = new Chart(medalBarCtx, {
		type: 'bar',
		data: {
			labels: ["1984", "1988", "1992", "1994", "1998", "2002","2006","2010","2014"],
			datasets: [{
				label: 'medal of world',
				data: [222, 264, 325, 343, 447, 481, 531, 529, 612],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(163, 231, 122, 0.2)',
					'rgba(255, 159, 64, 0.2)',
					'rgba(220, 153, 211, 0.2)',
					'rgba(245, 243, 86, 0.2)'

				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(163, 231, 122, 1)',
					'rgba(255, 159, 64, 1)',
					'rgba(220, 153, 211, 1)',
					'rgba(245, 243, 86, 1)'
				],
				borderWidth: 1
			},{

				type:"line",
				fill:false,
				label: 'medal of  CAN',
				data: [4, 6, 37, 40, 49, 75, 68, 91, 90],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(163, 231, 122, 0.2)',
					'rgba(255, 159, 64, 0.2)',
					'rgba(220, 153, 211, 0.2)',
					'rgba(245, 243, 86, 0.2)'

				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(163, 231, 122, 1)',
					'rgba(255, 159, 64, 1)',
					'rgba(220, 153, 211, 1)',
					'rgba(245, 243, 86, 1)'
				],
				borderWidth: 5
			}]
		},
		options:{
				legend:{
					display:true
				}	
			}

	});





var pieCtx = document.getElementById("myPie");

var myPie = new Chart(pieCtx, {
			type: 'pie',
			data: {
				labels: ['Biathlon','Bobsleigh','Curling','Ice Hockey','Luge','Skating','Skiing'],
				datasets: [{
					data: [3,22,50,351,0,159,40],
					borderColor:[
					'rgba(255, 255, 255, 1)',
					'rgba(255, 255, 255, 1)',
					'rgba(255, 255, 255, 1)',
					'rgba(255, 255, 255, 1)',
					'rgba(255, 255, 255, 1)',
					'rgba(255, 255, 255, 1)',
					'rgba(255, 255, 255, 1)',
				],
					backgroundColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(165, 223, 240, 1)',
					'rgba(163, 231, 122, 1)',
					'rgba(245, 243, 86, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
					'rgba(220, 153, 211, 1)',
					],
					label: 'Dataset 1'
				}]
			},
			options: {
				responsive: true,
				cutoutPercentage: 50,
			}
		});





var myBarCtx = document.getElementById("myBar").getContext('2d');

	var myBar = new Chart(myBarCtx, {
		type: 'bar',
		data: {
			labels: ["Biathlon", "Bobsleigh", "Curling", "Ice Hockey", "Luge", "Skating","Skiing"],
			datasets: [{
				label: 'Men',
				data: [0, 15, 25, 250, 0, 82, 14],
				backgroundColor: [
					'rgba(75, 192, 192, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(75, 192, 192, 0.2)'

				],
				borderColor: [
					'rgba(75, 192, 192, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(75, 192, 192, 1)'
				],
				borderWidth: 1
				},{
				
				label: 'Woman',
				data: [3, 7, 25, 101, 0, 77, 26,],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 99, 132, 0.2)'

				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(255, 99, 132, 1)',
					'rgba(255, 99, 132, 1)',
					'rgba(255, 99, 132, 1)',
					'rgba(255, 99, 132, 1)',
					'rgba(255, 99, 132, 1)',
					'rgba(255, 99, 132, 1)'
				],
				borderWidth: 1
			}]
		},
		options:{
				legend:{
					display:true
				}	
			}

	});


var myHorizontalBarCtx = document.getElementById("myHorizontalBar").getContext('2d');

	var myHorizontalBar = new Chart(myHorizontalBarCtx, {
		type: 'horizontalBar',
		data: {
			labels: ["Biathlon", "Bobsleigh", "Curling", "Ice Hockey", "Luge", "Skating","Skiing"],
			datasets: [{
				label: '# of Votes',
				backgroundColor: [
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(163, 231, 122, 0.2)',
					'rgba(255, 159, 64, 0.2)',
					'rgba(220, 153, 211, 0.2)',
					'rgba(245, 243, 86, 0.2)'
				],
				borderColor: [
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(163, 231, 122, 1)',
					'rgba(255, 159, 64, 1)',
					'rgba(220, 153, 211, 1)',
					'rgba(245, 243, 86, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			title: {
				display:true,
			}
		}
	});

var dataList=[
	[0, 0, 0, 0, 0, 4, 0],
	[0, 0, 0, 0, 0, 4, 2],
	[1, 0, 0, 23, 0, 12, 1],
	[2, 0, 0, 23, 0, 11, 4],
	[2, 0, 10, 20, 0, 16, 1],
	[0, 0, 10, 43, 0, 19, 3],
	[0, 5, 10, 19, 0, 29, 5],
	[0, 9, 10, 44, 0, 22, 6],
	[0, 2, 10, 46, 0, 20, 12],
	[1, 5, 10, 50, 0, 23, 15]
];

var titleList=[
	'Amount of medal 1984',
	'Amount of medal 1988',
	'Amount of medal 1992',
	'Amount of medal 1994',
	'Amount of medal 1998',
	'Amount of medal 2002',
	'Amount of medal 2006',
	'Amount of medal 2010',
	'Amount of medal 2014',
	'Predicted amount of medal 2050'
];


var index=0;

var num=setInterval(function (){
	myHorizontalBar.data.datasets[0].data = dataList[index%10];
	myHorizontalBar.options.title.text = titleList[index%10];
	myHorizontalBar.update();
	index++;
},3000);



function clearChange(){
	window.clearInterval(num);
}
