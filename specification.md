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
 * `note`: Other information, e.g. room #.

## `Time` object specification:
(under construction)

## `Qualification` object specification:
(under construction)

POST /event
