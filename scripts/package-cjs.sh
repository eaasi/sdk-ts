#!/bin/sh -e

# A workaround for exporting CommonJS distribution:
# https://nodejs.org/en/learn/modules/publishing-a-package#publish-both-full-cjs--esm-distributions
# https://nodejs.org/en/learn/modules/publishing-a-package#gotchas

exec cat <<EOT
{
  "type": "commonjs"
}
EOT
