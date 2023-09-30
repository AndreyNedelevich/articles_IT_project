cd ~/article_IT_project
npm run build:prod

rm -rf ~/../var/www/article-project/html
mv ~/articles_IT_project/build ~/../var/www/article-project/html