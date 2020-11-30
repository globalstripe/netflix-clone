git add .
echo "Enter your commit message"
read message
git commit -m $message
git push -u origin main
