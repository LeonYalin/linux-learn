#!/bin/bash

### For loop with i ###
for i in {1..10..2}
  do
    echo "printing count in iterarions of 2... current is $i"
  done

### For loop with files  ###
touch combined.txt
for filename in calc.sh loops.sh
  do
    cat $filename >> combined.txt
    echo "appended from $filename" >> combined.txt
  done

### If Else ###
if test 2 -ne 1; then
    echo "2 not equals 1"
else
    echo "2 equals 1"
fi

### While loop  ###
declare -i counter
counter=10
while [ $counter -gt 2 ]; do
    echo "counter is $counter"
    counter=counter-2
done

### Switch case ###
city="Kishinev"
case $city in
    Kishinev) echo "city is Kishinev";;
    Moscow) echo "city is Moscow";;
    *) echo "city is unknown";;
esac

exit 0


