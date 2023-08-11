//my first javascript code
        let person = Penny;
        consol.log('person');

        window.addEventListener('scroll', function() {
                // Get the current scroll position 
                var scrollPosition = window.scrollY; 
                // Calculate the new position for the climber 
                var climberPosition = 50 + scrollPosition * 0.5; 
                // Adjust the multiplier to control speed 
                // Update the climber's position 
                document.getElementById('climber').style.top = climberPosition + 'px'; 
        });
