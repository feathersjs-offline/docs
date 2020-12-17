name: Build
on:
  pull_request:
    branches:
    - master
  push:
    branches:
    - master
jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Build
      run: /bin/bash ./deploy.sh
    - name: Deploy
      if: ${{ github.event_name == 'push' && github.ref == 'refs/heads/master' }}
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GIT_TOKEN }}
        publish_dir: ./docs/.vurpress/dist

