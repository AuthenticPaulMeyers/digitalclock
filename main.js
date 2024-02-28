
	// Variables
	const hr =document.querySelector('.hour');
	const mn =document.querySelector('.minutes');
	const scs =document.querySelector('.seconds');


	function displayTime(){

		//get time from the local machine

		let myDate = new Date(),
			  hours = myDate.getHours();
			  minutes = myDate.getMinutes();
			  seconds = myDate.getSeconds();
            
              // Add string zero in front
              hours = addZero(hours);
			  minutes = addZero(minutes);	
			  seconds = addZero(seconds);

			  hr.textContent = hours;
			  mn.textContent = minutes;
			  scs.textContent = seconds;

	}setInterval("displayTime()", 1000);  // Display time after every second


	// A function to add zero when minutes and seconds are less than zero
	function addZero(zero){
		if(zero < 10){
			zero = '0' + zero;
		}

		return zero;
	}
