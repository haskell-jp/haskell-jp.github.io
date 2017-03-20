#! /bin/bash

set -ue

git checkout src
git push origin `git subtree split --prefix dist src`:master --force
