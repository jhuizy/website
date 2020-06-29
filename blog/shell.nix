let
  sources = import ./nix/sources.nix;
  pkgs = import sources.nixpkgs {};
  package = (import ./default.nix { inherit pkgs; }).package;
in
  pkgs.mkShell { 
    buildInputs = with pkgs; [
      nodejs
      yarn
      yarn2nix
      package
    ];
  }
