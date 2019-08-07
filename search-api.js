// this mimics the search api
const searchApi = {
    "http://localhost:8000/api/search/?q=mri+head": {
        "count": 16,
        "next": null,
        "previous": null,
        "results": [
            {
                "id": 442,
                "service": {
                    "name": "mri",
                    "modifier": "brain",
                    "body_part": "head"
                },
                "provider": {
                    "name": "Aventura Hospital",
                    "address": "20900 Biscayne Boulevard, Aventura, FL 33180-1407"
                },
                "price": "7437.00"
            },
            {
                "id": 443,
                "service": {
                    "name": "mri",
                    "modifier": "brain",
                    "body_part": "head"
                },
                "provider": {
                    "name": "Baptist Hospital of Miami",
                    "address": "8900 N. Kendall Drive, Miami, FL 33176-2197"
                },
                "price": "6030.00"
            },
            {
                "id": 444,
                "service": {
                    "name": "mri",
                    "modifier": "brain",
                    "body_part": "head"
                },
                "provider": {
                    "name": "Broward Health Medical Center",
                    "address": "1600 S. Andrews Avenue, Fort Lauderdale, FL 33316-2510"
                },
                "price": "2855.00"
            },
            {
                "id": 445,
                "service": {
                    "name": "mri",
                    "modifier": "brain",
                    "body_part": "head"
                },
                "provider": {
                    "name": "Doctors Hospital",
                    "address": "5000 University Drive, Coral Gables, FL 33146-2094"
                },
                "price": "6030.00"
            },
            {
                "id": 446,
                "service": {
                    "name": "mri",
                    "modifier": "brain",
                    "body_part": "head"
                },
                "provider": {
                    "name": "Holy Cross Hospital",
                    "address": "4725 N. Federal Highway, Fort Lauderdale, FL 33308-4603"
                },
                "price": "3852.00"
            },
            {
                "id": 447,
                "service": {
                    "name": "mri",
                    "modifier": "brain",
                    "body_part": "head"
                },
                "provider": {
                    "name": "Jackson Behavioral Health Hospital",
                    "address": "1695 NW 9th Ave, Miami, FL 33136"
                },
                "price": "3922.00"
            },
            {
                "id": 448,
                "service": {
                    "name": "mri",
                    "modifier": "brain",
                    "body_part": "head"
                },
                "provider": {
                    "name": "Jackson Memorial Hospital",
                    "address": "1611 NW 12th Avenue, Miami, FL 33136-1094"
                },
                "price": "3922.00"
            },
            {
                "id": 449,
                "service": {
                    "name": "mri",
                    "modifier": "brain",
                    "body_part": "head"
                },
                "provider": {
                    "name": "Jackson North Medical Center",
                    "address": "160 NW 170th Street, North Miami Beach, FL 33169"
                },
                "price": "3922.00"
            },
            {
                "id": 450,
                "service": {
                    "name": "mri",
                    "modifier": "brain",
                    "body_part": "head"
                },
                "provider": {
                    "name": "Jackson South Medical Center",
                    "address": "9333 SW 152nd Street, Miami, FL 33157"
                },
                "price": "3922.00"
            },
            {
                "id": 451,
                "service": {
                    "name": "mri",
                    "modifier": "brain",
                    "body_part": "head"
                },
                "provider": {
                    "name": "Larkin Community Hospital",
                    "address": "1475 W. 49th Pl, Hialeah, FL 33012-3275"
                },
                "price": "7419.00"
            },
            {
                "id": 452,
                "service": {
                    "name": "mri",
                    "modifier": "brain",
                    "body_part": "head"
                },
                "provider": {
                    "name": "Mount Sinai Medical Center & Miami Heart Institute",
                    "address": "4300 Alton Road, Miami Beach, FL 33140-2800"
                },
                "price": "5462.88"
            },
            {
                "id": 453,
                "service": {
                    "name": "mri",
                    "modifier": "brain",
                    "body_part": "head"
                },
                "provider": {
                    "name": "North Shore Medical Center",
                    "address": "1100 NW 95th Street, Miami, FL 33150-2098"
                },
                "price": "10880.37"
            },
            {
                "id": 454,
                "service": {
                    "name": "mri",
                    "modifier": "brain",
                    "body_part": "head"
                },
                "provider": {
                    "name": "South Miami Hospital",
                    "address": "6200 SW 73rd Street, South Miami, FL 33143-9990"
                },
                "price": "6030.00"
            },
            {
                "id": 455,
                "service": {
                    "name": "mri",
                    "modifier": "brain",
                    "body_part": "head"
                },
                "provider": {
                    "name": "Sylvester Cancer Center",
                    "address": "1475 NW 12th Avenue, Miami, FL 33136-1002"
                },
                "price": "2729.00"
            },
            {
                "id": 456,
                "service": {
                    "name": "mri",
                    "modifier": "brain",
                    "body_part": "head"
                },
                "provider": {
                    "name": "University of Miami Hospital",
                    "address": "1400 NW 12th Avenue, Miami, FL 33136-1003"
                },
                "price": "2729.00"
            },
            {
                "id": 457,
                "service": {
                    "name": "mri",
                    "modifier": "brain",
                    "body_part": "head"
                },
                "provider": {
                    "name": "West Kendall Baptist",
                    "address": "9555 SW 162 Ave, Miami, FL 33196"
                },
                "price": "6030.00"
            }
        ]
    },
    "http://localhost:8000/api/search/?q=x-ray+Lauderdale": {
        "count": 18,
        "next": null,
        "previous": null,
        "results": [
            {
                "id": 746,
                "service": {
                    "name": "x-ray",
                    "modifier": "abdomen",
                    "body_part": "torso"
                },
                "provider": {
                    "name": "Broward Health Medical Center",
                    "address": "1600 S. Andrews Avenue, Fort Lauderdale, FL 33316-2510"
                },
                "price": "580.00"
            },
            {
                "id": 748,
                "service": {
                    "name": "x-ray",
                    "modifier": "abdomen",
                    "body_part": "torso"
                },
                "provider": {
                    "name": "Holy Cross Hospital",
                    "address": "4725 N. Federal Highway, Fort Lauderdale, FL 33308-4603"
                },
                "price": "560.00"
            },
            {
                "id": 762,
                "service": {
                    "name": "x-ray",
                    "modifier": "ankle",
                    "body_part": "leg"
                },
                "provider": {
                    "name": "Broward Health Medical Center",
                    "address": "1600 S. Andrews Avenue, Fort Lauderdale, FL 33316-2510"
                },
                "price": "647.00"
            },
            {
                "id": 764,
                "service": {
                    "name": "x-ray",
                    "modifier": "ankle",
                    "body_part": "leg"
                },
                "provider": {
                    "name": "Holy Cross Hospital",
                    "address": "4725 N. Federal Highway, Fort Lauderdale, FL 33308-4603"
                },
                "price": "499.00"
            },
            {
                "id": 777,
                "service": {
                    "name": "x-ray",
                    "modifier": "chest 2-views",
                    "body_part": "torso"
                },
                "provider": {
                    "name": "Broward Health Medical Center",
                    "address": "1600 S. Andrews Avenue, Fort Lauderdale, FL 33316-2510"
                },
                "price": "162.00"
            },
            {
                "id": 779,
                "service": {
                    "name": "x-ray",
                    "modifier": "chest 2-views",
                    "body_part": "torso"
                },
                "provider": {
                    "name": "Holy Cross Hospital",
                    "address": "4725 N. Federal Highway, Fort Lauderdale, FL 33308-4603"
                },
                "price": "340.00"
            },
            {
                "id": 793,
                "service": {
                    "name": "x-ray",
                    "modifier": "foot",
                    "body_part": "leg"
                },
                "provider": {
                    "name": "Broward Health Medical Center",
                    "address": "1600 S. Andrews Avenue, Fort Lauderdale, FL 33316-2510"
                },
                "price": "623.00"
            },
            {
                "id": 795,
                "service": {
                    "name": "x-ray",
                    "modifier": "foot",
                    "body_part": "leg"
                },
                "provider": {
                    "name": "Holy Cross Hospital",
                    "address": "4725 N. Federal Highway, Fort Lauderdale, FL 33308-4603"
                },
                "price": "350.00"
            },
            {
                "id": 809,
                "service": {
                    "name": "x-ray",
                    "modifier": "hip",
                    "body_part": "torso"
                },
                "provider": {
                    "name": "Broward Health Medical Center",
                    "address": "1600 S. Andrews Avenue, Fort Lauderdale, FL 33316-2510"
                },
                "price": "212.00"
            },
            {
                "id": 811,
                "service": {
                    "name": "x-ray",
                    "modifier": "hip",
                    "body_part": "torso"
                },
                "provider": {
                    "name": "Holy Cross Hospital",
                    "address": "4725 N. Federal Highway, Fort Lauderdale, FL 33308-4603"
                },
                "price": "198.00"
            },
            {
                "id": 825,
                "service": {
                    "name": "x-ray",
                    "modifier": "knee",
                    "body_part": "leg"
                },
                "provider": {
                    "name": "Broward Health Medical Center",
                    "address": "1600 S. Andrews Avenue, Fort Lauderdale, FL 33316-2510"
                },
                "price": "727.00"
            },
            {
                "id": 827,
                "service": {
                    "name": "x-ray",
                    "modifier": "knee",
                    "body_part": "leg"
                },
                "provider": {
                    "name": "Holy Cross Hospital",
                    "address": "4725 N. Federal Highway, Fort Lauderdale, FL 33308-4603"
                },
                "price": "461.00"
            },
            {
                "id": 841,
                "service": {
                    "name": "x-ray",
                    "modifier": "pelvis",
                    "body_part": "groin"
                },
                "provider": {
                    "name": "Broward Health Medical Center",
                    "address": "1600 S. Andrews Avenue, Fort Lauderdale, FL 33316-2510"
                },
                "price": "621.00"
            },
            {
                "id": 843,
                "service": {
                    "name": "x-ray",
                    "modifier": "pelvis",
                    "body_part": "groin"
                },
                "provider": {
                    "name": "Holy Cross Hospital",
                    "address": "4725 N. Federal Highway, Fort Lauderdale, FL 33308-4603"
                },
                "price": "559.00"
            },
            {
                "id": 857,
                "service": {
                    "name": "x-ray",
                    "modifier": "shoulder",
                    "body_part": "arm"
                },
                "provider": {
                    "name": "Broward Health Medical Center",
                    "address": "1600 S. Andrews Avenue, Fort Lauderdale, FL 33316-2510"
                },
                "price": "338.00"
            },
            {
                "id": 859,
                "service": {
                    "name": "x-ray",
                    "modifier": "shoulder",
                    "body_part": "arm"
                },
                "provider": {
                    "name": "Holy Cross Hospital",
                    "address": "4725 N. Federal Highway, Fort Lauderdale, FL 33308-4603"
                },
                "price": "541.00"
            },
            {
                "id": 873,
                "service": {
                    "name": "x-ray",
                    "modifier": "wrist",
                    "body_part": "arm"
                },
                "provider": {
                    "name": "Broward Health Medical Center",
                    "address": "1600 S. Andrews Avenue, Fort Lauderdale, FL 33316-2510"
                },
                "price": "535.00"
            },
            {
                "id": 875,
                "service": {
                    "name": "x-ray",
                    "modifier": "wrist",
                    "body_part": "arm"
                },
                "provider": {
                    "name": "Holy Cross Hospital",
                    "address": "4725 N. Federal Highway, Fort Lauderdale, FL 33308-4603"
                },
                "price": "400.00"
            }
        ]
    }
}