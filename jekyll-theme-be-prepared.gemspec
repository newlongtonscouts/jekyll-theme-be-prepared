# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-be-prepared"
  spec.version       = "1.0.1"
  spec.authors       = ["Alex Paterson @ 1st New Longton Scouts"]
  spec.email         = ["admin@newlongtonscouts.com"]

  spec.summary       = "A Jekyll theme for UK-based Scout groups."
  spec.homepage      = "https://github.com/newlongtonscouts/jekyll-theme-be-prepared"
  spec.license       = "Nonstandard"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.3"
end
