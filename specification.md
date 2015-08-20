# REST API Specification

Some parts of this have not been implemented properly yet. Search this file for NB to locate these parts.

## GET `/events`:

No parameters taken.

Result: JSON Array of `Event` objects. (NB: currently `JSON.stringifi`ed)

## POST `/events`:

### Parameters: 
event - JSON event object

### Result: 
id of newly created event

## PUT `/events`:

### Parameters:  
event - JSON event object 
id - id representing te event to change

### Result:
id of newly created event

## `Event` object specification:
 * `host-name`: A name of the organization or person hosting the event.
 * `times`: An array of `Time` objects. (NB: currently an array of two numbers.)
 * `qualifications`: An array of strings. (NB: currently one string)
 * `name`: The name of the event.
 * `contact`: An email address.
 * `location`: An address, room number, etc
 * `coordinates`: A [latitude, longitude] pair. (NB: currently strings, not numbers.)
 * `policy`: One of `"drop-in"`, `"arrive-at-start"`.
 * `tags`: An array of strings. (NB: currently a string)
 * `description`: A short description of the event.
 * `id`: The event ID (NB: not yet implemented).

## `Time` object specification:
 * `type`: Exactly the string `"duration"`.
 * `start`: (for `duration`) The timestamp of the start time.
 * `end`: (for `duration`) The timestamp of the end time.
