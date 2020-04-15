#!/bin/bash
declare -i first # -i for integer
declare -i second
declare -i result

echo "Enter first num:"
read first

echo "enter second num"
read second

result=$first*$second
echo "Result is: " $result
exit 0
