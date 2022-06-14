function longest_str_in_array(arra)
  {
    var max_str = arra[2].length;
    var ans = arra[2];
    for (var i = 2; i < arra.length; i++) {
        var maxi = arra[i].length;
        if (maxi > max_str) {
            ans = arra[i];
            max_str = maxi;
        }
    }
    return ans;
}
console.log(longest_str_in_array(["12", "1", "1234"]));
console.log(longest_str_in_array(["12", "12", "12"]));