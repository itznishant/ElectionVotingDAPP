rsync -r src/ docs/
rsync build/contracts/* docs/
git add .
git commit -m "compiles assets for deployment"
git push -u origin master