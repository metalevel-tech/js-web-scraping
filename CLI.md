# Command-line

Here is a list of my custom scrips, commands and procedures, related to the app deployment.

## Reverse proxy for the app

```bash
sudo a2proxy 'web-scraper' '48011'
```

```bash
sudo a2proxy 'web-scraper' remove
```

## Docker container for the app

```bash
# docker run -p '48011':'48011' 'web-scraper' -d
```

```bash
docker-compose up -d
```

```bash
docker-compose down
```

```bash
docker-prune.sh
```

## [PM2](https://www.npmjs.com/package/pm2) service for the app

```bash
cd app/
npm install # --dev
```

```bash
pm2 start 'npm run watch' --name 'web-scraper'
pm2 save
```

```bash
pm2 start 'npm start' --name 'web-scraper'
pm2 save
```

```bash
pm2 stop 'web-scraper'
pm2 delete 'web-scraper'
pm2 save
```
