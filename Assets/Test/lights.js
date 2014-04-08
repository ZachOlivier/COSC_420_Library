#pragma strict

// I named the lights "light_1" "light_2".... Be sure to name the lights that need to be turned on and their respective switches the same
// I named the switches "switch_1" "switch_2".... Be sure to name the switches that need to be stepped in and their respective lights the same

// Be sure to have the player's tag be "Player" in its inspector panel

// Variables to store whether the player is currently in range of the switch in order to trigger the lights
var inSwitch_1										: boolean = false;
var inSwitch_2										: boolean = false;
var inSwitch_3										: boolean = false;
var inSwitch_4										: boolean = false;
var inSwitch_5										: boolean = false;
var inSwitch_6										: boolean = false;
var inSwitch_7										: boolean = false;

// Create a variable to hold the guiText gameObject in, we will need this in order to access its scripts
var text											: GameObject;

function Start () {
	// Make sure the game knows the player is not currently in range of any of the switches when the game starts
	inSwitch_1 = false;
	inSwitch_2 = false;
	inSwitch_3 = false;
	inSwitch_4 = false;
	inSwitch_5 = false;
	inSwitch_6 = false;
	inSwitch_7 = false;
}

function Update () {

	// If the player clicks the left mouse button (this can be changed to whatever key you want)
	if (Input.GetButtonDown("Fire1"))
	{
		// If the player is currently in range of switch_1
		if (inSwitch_1)
		{
			// Create a variable to store the light in
			var light_1 : GameObject = gameObject.Find("light_1").gameObject;
		
			// If the light is currently turned on
			if (light_1.light.enabled == true)
			{
				// Turn the light off
				light_1.light.enabled = false;
			}
			
			else
			{
				// Else if the light is currently turned off, turn it on
				light_1.light.enabled = true;
			}
		}
		
		else if (inSwitch_2)
		{
			var light_2 : GameObject = gameObject.Find("light_2").gameObject;
		
			if (light_2.light.enabled == true)
			{
				light_2.light.enabled = false;
			}
			
			else
			{
				light_2.light.enabled = true;
			}
		}
		
		else if (inSwitch_3)
		{
			var light_3 : GameObject = gameObject.Find("light_3").gameObject;
		
			if (light_3.light.enabled == true)
			{
				light_3.light.enabled = false;
			}
			
			else
			{
				light_3.light.enabled = true;
			}
		}
		
		else if (inSwitch_4)
		{
			var light_4 : GameObject = gameObject.Find("light_4").gameObject;
		
			if (light_4.light.enabled == true)
			{
				light_4.light.enabled = false;
			}
			
			else
			{
				light_4.light.enabled = true;
			}
		}
		
		else if (inSwitch_5)
		{
			var light_5 : GameObject = gameObject.Find("light_5").gameObject;
		
			if (light_5.light.enabled == true)
			{
				light_5.light.enabled = false;
			}
			
			else
			{
				light_5.light.enabled = true;
			}
		}
		
		else if (inSwitch_6)
		{
			var light_6 : GameObject = gameObject.Find("light_6").gameObject;
		
			if (light_6.light.enabled == true)
			{
				light_6.light.enabled = false;
			}
			
			else
			{
				light_6.light.enabled = true;
			}
		}
		
		else if (inSwitch_7)
		{
			var light_7 : GameObject = gameObject.Find("light_7").gameObject;
		
			if (light_7.light.enabled == true)
			{
				light_7.light.enabled = false;
			}
			
			else
			{
				light_7.light.enabled = true;
			}
		}
	}
}

// When something enters a switch collision box
function OnTriggerEnter (other : Collider)
{
	// Create a variable to hold the guiText's script in (We need to use the uiSystem script in order to display text on screen)
	var message : uiSystem = text.gameObject.GetComponent(uiSystem);

	// If it was the player
	if (other.gameObject.tag == "Player")
	{
		// If the box the player is in range of is switch_1
		if (this.gameObject.name == "switch_1")
		{
			// Let the game know that the player is currently inside of switch_1
			inSwitch_1 = true;
			
			// Let the player know that they can now turn the light on and off
			message.displayWarning("Click the left mouse button to use switch", 100);
		}
		
		else if (this.gameObject.name == "switch_2")
		{
			inSwitch_2 = true;
		}
		
		else if (this.gameObject.name == "switch_3")
		{
			inSwitch_3 = true;
		}
		
		else if (this.gameObject.name == "switch_4")
		{
			inSwitch_4 = true;
		}
		
		else if (this.gameObject.name == "switch_5")
		{
			inSwitch_5 = true;
		}
		
		else if (this.gameObject.name == "switch_6")
		{
			inSwitch_6 = true;
		}
		
		else if (this.gameObject.name == "switch_7")
		{
			inSwitch_7 = true;
		}
	}
}

// When something exits a switch collision box
function OnTriggerExit (other : Collider)
{
	// Create a variable to hold the guiText's script in (We need to use the uiSystem script in order to display text on screen)
	var message : uiSystem = text.gameObject.GetComponent(uiSystem);

	// If it was the player
	if (other.gameObject.tag == "Player")
	{
		// If the box the player exit was switch_1
		if (this.gameObject.name == "switch_1")
		{
			// Let the game know that the player is currently outside of switch_1
			inSwitch_1 = false;
			
			message.warning.enabled = false;
		}
		
		else if (this.gameObject.name == "switch_2")
		{
			inSwitch_2 = false;
		}
		
		else if (this.gameObject.name == "switch_3")
		{
			inSwitch_3 = false;
		}
		
		else if (this.gameObject.name == "switch_4")
		{
			inSwitch_4 = false;
		}
		
		else if (this.gameObject.name == "switch_5")
		{
			inSwitch_5 = false;
		}
		
		else if (this.gameObject.name == "switch_6")
		{
			inSwitch_6 = false;
		}
		
		else if (this.gameObject.name == "switch_7")
		{
			inSwitch_7 = false;
		}
	}
}