# REST API Specification

##GET `/events`:

No parameters taken.

Result: JSON Array of `Event` objects.

##POST '/events':

###Parameters: 
event - JSON event object

###Result: 
id of newly created event

##PUT '/events':

###Parameters:  
event - JSON event object 
id - id representing te event to change

###Result:
id of newly created event

## `Event` object specification:
 * `host-name`: A name of the organization or person hosting the event.
 * `times`: An array of `Time` objects.
 * `qualifications`: An array of strings.
 * `name`: The name of the event.
 * `contact`: An email address.
 * `location`: An address, room number, etc
 * `coordinates`: A [latitude, longitude] pair.
 * `policy`: One of `"drop-in"`, `"arrive-at-start"`.
 * `tags`: An array of strings.
 * `id`: An integer uniquely identifying the event.
 * `description`: A short description of the event.

## `Time` object specification:
 * `type`: Exactly the string `"duration"`.
 * `start`: (for `duration`) The timestamp of the start time.
 * `end`: (for `duration`) The timestamp of the end time.


POST /event
