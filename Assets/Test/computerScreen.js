#pragma strict

// I made it so that the materials are in the script, so that you don't have to attach anything in the inspector panel
// You MUST have a "Resources" folder that contains the materials for the computer screen being turned on, and off
// You MUST also named these "screenOff" and "screenOn" respectively

// Creat variables to store the materials in
var screenOff								: Material;
var screenOn								: Material;

// Create a variable to switch the materials
var switcher								: int = 0;

// Create an array (this is because Unity can't just change renderer.material, you must first create an array to
// store renderer.materials in, then switch them out as shown below
var myArray									: Array;

// Create a variable to store the time in which the materials will switch, and how much time has gone by
var switchTime								: float = 0.0;
var timer									: float = 0.0;

// This will only trigger once at the start of this script
function Start () {
	
	// Set the array to the renderer.materials
	myArray = renderer.materials;
	
	// Set the material variables to their respective materials in the "Resources" folder
	screenOff = Resources.Load("screenOff", Material);
	screenOn = Resources.Load("screenOn", Material);

	// Have the computer either start turned on or off, depending on the random number
	switcher = Random.Range(0, 1);
	
	// If the random number was 0
	if (switcher == 0)
	{
		// Put the screenOff material into the array, then set the renderer.materials to the array we made (turns the screen off)
		myArray[1] = screenOff;
		renderer.materials = myArray;
	}
	
	else
	{
		myArray[1] = screenOn;
		renderer.materials = myArray;
	}
	
	// Set the timer to 0
	timer = 0;
	
	// Set the time in which the computer will turn on or off to a random number
	switchTime = Random.Range(7, 15);
}

// This will continue over and over throughout the life of the script
function Update () {

	// Have timer increase by seconds
	timer += Time.deltaTime;
	
	// If the timer passes the set time limit
	if (timer > switchTime)
	{
		// If the screen is currently turned on
		if (myArray[1] == screenOn)
		{
			// Turn the screen off (same way as above)
			myArray[1] = screenOff;
			renderer.materials = myArray;
		}
	
		else
		{
			myArray[1] = screenOn;
			renderer.materials = myArray;
		}
	
		// Make sure to reset the timer
		timer = 0;
		
		// Make sure to reset the random time limit
		switchTime = Random.Range(7, 15);
	}
}