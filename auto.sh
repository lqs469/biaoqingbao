#!/bin/bash
for filename in ./images/*; do
    echo $filename
    guetzli --quality 84 $filename $filename
done

