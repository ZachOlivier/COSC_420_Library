#pragma strict

// Create a variable to decide whether the info can be shown or not
var canDisplay											: boolean = true;

// Create variables to hold the amount of time before an event happens, and how much time has passed
var timer												: float = 0.0;
var time												: float = 0.0;

// Create a variable to hold the guiText gameObject in, we will need this in order to access its scripts
var text												: GameObject;

function Start () {
	// Make sure that the info can be displayed as soon as the game starts
	canDisplay = true;
}

function Update () {
	// If the set timer is greater than 0
	if (timer > 0) {
		// Start the time to count
		time += Time.deltaTime;
		
		// If the time has passed the set timer
		if (time > timer) {
			// Reset them both
			timer = 0;
			time = 0;
			
			// Set the object's collider back to true (We disabled the collider in order to let the mouse see through it)
			// If the mouse never saw through this collider, it would not be able to register an object that can display info
			this.gameObject.collider.enabled = true;
		}
	}
}

// When the mouse has entered an object's collider
function OnMouseEnter () {
	// Create a variable to hold the guiText's script in (We need to use the uiSystem script in order to display text on screen)
	var message : uiSystem = text.gameObject.GetComponent(uiSystem);

	// If the collider the mouse entered was one of the switches and canDisplay is set to true
	if (this.gameObject.name == "switch_1" || this.gameObject.name == "switch_2" || this.gameObject.name == "switch_3" || this.gameObject.name == "switch_4" || this.gameObject.name == "switch_5" || this.gameObject.name == "switch_6" || this.gameObject.name == "switch_7" && canDisplay) {
		// Display text on screen to show that it is currently hovering over a light switch (The 10 is the amount of time it will be shown)
		message.displayInfo("Light Switch", 10);
	}
	
	// If the collider the mouse entered was something that does not display info
	if (this.gameObject.tag == "Collider" && canDisplay) {
		// Turn off that collider in order to see through it
		this.gameObject.collider.enabled = false;
		
		// Set the timer so that the collider gets turned back on in .05 seconds
		timer = .05;
	}
}

// When the mouse has exited an object's collider
function OnMouseExit () {
	// Create a variable to hold the guiText's script in (We need to use the uiSystem script in order to display text on screen)
	var message : uiSystem = text.gameObject.GetComponent(uiSystem);

	// If the mouse exit the collider of a switch
	if (this.gameObject.name == "switch_1" || this.gameObject.name == "switch_2" || this.gameObject.name == "switch_3" || this.gameObject.name == "switch_4" || this.gameObject.name == "switch_5" || this.gameObject.name == "switch_6" || this.gameObject.name == "switch_7" && canDisplay) {
		// Turn off the display text
		message.info.enabled = false;
	}
}