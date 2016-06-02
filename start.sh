set -x
bundle exec sidekiq -d -l data/sidekiq.log
bundle exec thin start -e production
