# REST API Specification

GET `/events`:

No parameters taken.

Result: JSON Array of `Event` objects.

## `Event` object specification:
 * `host-name`: A name of the organization or person hosting the event.
 * `times`: An array of `Time` objects.
 * `qualifications`: An array of `Qualification` objects.
 * `name`: A short description of the event.
 * `contact`: A email address.
 * `location`: A [latitude, longitude] pair.
 * `policy`: One of `"drop-in"`, `"arrive-at-start"`.
 * `note`: Other information, e.g. room #.
 * `tags`: An array of strings.

## `Time` object specification:
 * `type`: Exactly the string `"duration"`.
 * `start`: (for `duration`) The timestamp of the start time.
 * `end`: (for `duration`) The timestamp of the end time.

## `Qualification` object specification:
(not yet, leave qualifications array blank for now)

POST /event
